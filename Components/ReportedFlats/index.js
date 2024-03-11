import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  display: grid;
  gap: 40px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledTicket = styled.span`
  display: inline-block;
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  border: solid white;
  padding: 10px;
  background-color: #2422d5;
  color: white;
  min-width: 200px;
`;

export default function ReportedFlats({ emptyFlats }) {
  console.log(emptyFlats);

  return (
    <StyledList>
      {emptyFlats.map((flat, index) => (
        <li key={index}>
          <StyledTicket>
            <Link href={`/tickets/${flat._id}`}>{flat.street}</Link>
          </StyledTicket>
        </li>
      ))}
    </StyledList>
  );
}
