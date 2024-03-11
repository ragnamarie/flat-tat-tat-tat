import styled from "styled-components";

export const StyledTicket = styled.span`
  display: inline-block;
  position: relative;
  font-family: Helvetica;
  font-weight: 500;
  border: solid white;
  padding: 10px;
  background-color: #2422d5;
  color: white;
  min-width: 200px;
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
      <h1>{street}</h1>
      <StyledTicket>
        <p>
          <u>Address</u>
          <br /> {street} <br /> {zip} Berlin
        </p>
        <p>
          <u>Apartment</u>
          <br /> {apartment}
        </p>
        <p>
          <u>Names</u>
          <br /> {namesOnDoorbell}
        </p>
        <p>
          <u>Status</u>
          <br /> {isConfirmedEmpty.toString()}
        </p>
      </StyledTicket>
    </>
  );
}
