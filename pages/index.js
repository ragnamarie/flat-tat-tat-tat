import Counter from "../Components/Counter";
import Link from "next/link";
import useSWR from "swr";

export default function HomePage() {
  const { data: emptyFlatsData, isLoading: loadingEmptyFlatsData } =
    useSWR("/api/emptyFlats");

  if (loadingEmptyFlatsData) {
    return <h1>LOADING...</h1>;
  }

  if (!emptyFlatsData) {
    return;
  }

  console.log(emptyFlatsData);

  return (
    <>
      <h1>
        <Counter emptyFlats={emptyFlatsData} />
      </h1>
      <h3>
        <Link href="/report">Report an empty flat</Link>
      </h3>
    </>
  );
}
