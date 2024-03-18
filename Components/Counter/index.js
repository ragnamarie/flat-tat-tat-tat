import styled from "styled-components";

export const HighlightedFlatsCount = styled.span`
  text-decoration: underline;
`;

export default function Counter({ emptyFlats }) {
  const confirmedEmptyFlats = emptyFlats.filter(
    (flat) => flat.isConfirmedEmpty
  );

  // Count the number of confirmed empty flats
  const emptyFlatsCount = confirmedEmptyFlats.length;

  return (
    <>
      THERE ARE CURRENTLY{" "}
      <HighlightedFlatsCount>{emptyFlatsCount}</HighlightedFlatsCount> CONFIRMED
      EMPTY FLATS IN BERLIN.
    </>
  );
}
