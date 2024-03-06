export default function Counter({ emptyFlats }) {
  const emptyFlatsCount = emptyFlats.length;

  return (
    <>THERE ARE CURRENTLY {emptyFlatsCount} CONFIRMED EMPTY FLATS IN BERLIN</>
  );
}
