import styled from "styled-components";

export const StyledBlueBoxConfirmed = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  font-size: 14px;
  border: solid white;
  padding: 10px;
  background-color: #2422d5;
  color: #3bff13;
  min-height: 40px;
  width: 200px;
`;

export const StyledBlueBoxInvestigating = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  font-size: 14px;
  border: solid white;
  padding: 10px;
  background-color: #2422d5;
  color: #ff7373;
  min-height: 40px;
  width: 200px;
`;

export const StyledSelect = styled.select`
  color: #ff7373;
`;

export default function StatusSelection({ isConfirmedEmpty, onStatusChange }) {
  if (isConfirmedEmpty === true) {
    return <StyledBlueBoxConfirmed>CONFIRMED</StyledBlueBoxConfirmed>;
  } else {
    return (
      <StyledBlueBoxInvestigating>
        <StyledSelect onChange={onStatusChange}>
          <option value="investigating">INVESTIGATING</option>
          <option value="confirmed">CONFIRMED</option>
        </StyledSelect>
      </StyledBlueBoxInvestigating>
    );
  }
}
