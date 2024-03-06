export default function Counter({ emptyFlats }) {
  const emptyFlatsCount = emptyFlats.length;

  return <>Current number of empty flats: {emptyFlats}</>;
}
