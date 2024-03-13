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

export default function Status({ isConfirmedEmpty }) {
  if (isConfirmedEmpty === true) {
    return <StyledBlueBoxConfirmed>CONFIRMED</StyledBlueBoxConfirmed>;
  } else {
    return (
      <StyledBlueBoxInvestigating>INVESTIGATING</StyledBlueBoxInvestigating>
    );
  }
}
