import styled from "styled-components";
import Link from "next/link";
import Status from "../StatusSelection";

export const StyledList = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledTicket = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  border: solid white;
  padding: 10px;
  background-color: #2422d5;
  color: white;
  min-width: 250px;
`;

export const LinkNotUnderlined = styled.a`
  text-decoration: none;
`;

export default function ReportedFlats({ emptyFlats }) {
  console.log(emptyFlats);

  return (
    <StyledList>
      {emptyFlats.map((flat, index) => (
        <li key={index}>
          <StyledContainer>
            <LinkNotUnderlined href={`/tickets/${flat._id}`}>
              <StyledTicket>{flat.street}</StyledTicket>
            </LinkNotUnderlined>
            <Status isConfirmedEmpty={flat.isConfirmedEmpty} />
          </StyledContainer>
        </li>
      ))}
    </StyledList>
  );
}
