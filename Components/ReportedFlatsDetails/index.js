import styled from "styled-components";
import Status from "../Status";

export const StyledTicket = styled.span`
  display: inline-block;
  position: relative;
  font-family: Helvetica;
  font-weight: 500;
  background-color: #2422d5;
  color: white;
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledWhiteBox = styled.span`
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
  min-width: 200px;
`;

export const StyledBlueBox = styled.span`
  display: flex;
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  font-size: 14px;
  border: solid white;
  padding: 10px;
  background-color: #2422d5;
  color: white;
  min-height: 60px;
  min-width: 200px;
  margin-bottom: 20px;
`;

export default function ReportedFlatsDetails({
  street,
  zip,
  apartment,
  namesOnDoorbell,
  isConfirmedEmpty,
}) {
  console.log(isConfirmedEmpty);

  return (
    <>
      <StyledContainer>
        <StyledTicket>
          <StyledWhiteBox>ADDRESS</StyledWhiteBox>
          <StyledBlueBox>
            {street} <br /> {zip} Berlin
          </StyledBlueBox>

          <StyledWhiteBox>APARTMENT</StyledWhiteBox>
          <StyledBlueBox>{apartment}</StyledBlueBox>

          <StyledWhiteBox>NAMES</StyledWhiteBox>
          <StyledBlueBox>{namesOnDoorbell}</StyledBlueBox>
        </StyledTicket>
        <div>
          <StyledWhiteBox>STATUS</StyledWhiteBox>
          <Status isConfirmedEmpty={isConfirmedEmpty} />
        </div>
      </StyledContainer>
    </>
  );
}
