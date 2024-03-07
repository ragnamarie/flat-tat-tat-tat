import styled from "styled-components";

export const HighlightedFlatsCount = styled.span`
  text-decoration: underline;
`;

export default function Counter({ emptyFlats }) {
  const emptyFlatsCount = emptyFlats.length;

  return (
    <>
      THERE ARE CURRENTLY{" "}
      <HighlightedFlatsCount>{emptyFlatsCount}</HighlightedFlatsCount> CONFIRMED
      EMPTY FLATS IN BERLIN.
    </>
  );
}
