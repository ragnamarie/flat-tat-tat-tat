import styled from "styled-components";

export const StyledBlueBox = styled.span`
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
    <StyledBlueBox>
      {isConfirmedEmpty ? "CONFIRMED" : "INVESTIGATING"}
    </StyledBlueBox>
  );
}
