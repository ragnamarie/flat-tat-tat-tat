import useLocalStorageState from "use-local-storage-state";
import Counter from "../Components/Counter";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data: emptyFlatsData, isLoading: loadingEmptyFlatsData } = useSWR(
    "/api/emptyFlats",
    fetcher
  );

  if (loadingEmptyFlatsData) {
    return <h1>LOADING...</h1>;
  }

  if (!emptyFlatsData) {
    return;
  }

  console.log(emptyFlatsData);

  return (
    <>
      <Counter emptyFlats={emptyFlatsData} />
      <Link href="/report">report an empty flat</Link>
    </>
  );
}
