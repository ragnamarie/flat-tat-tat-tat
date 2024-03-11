import styled from "styled-components";

export const StyledStatus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  font-size: 14px;
  padding: 10px;
  background-color: white;
  color: #2422d5;
  max-height: 40px;
  margin-bottom: 5px;
  width: 200px;
`;

export const StyledConfirmed = styled.span`
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
  color: white;
  max-height: 40px;
  width: 200px;
`;

export default function Status({ isConfirmedEmpty }) {
  return (
    <div>
      <StyledStatus>STATUS</StyledStatus>
      <StyledConfirmed>
        {isConfirmedEmpty ? "CONFIRMED" : "INVESTIGATING"}
      </StyledConfirmed>
    </div>
  );
}
