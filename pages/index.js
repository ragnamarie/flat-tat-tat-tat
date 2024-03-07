import Counter from "../Components/Counter";
import Link from "next/link";
import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "../Components/Layout";

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
    <Layout>
      <GlobalStyle />
      <h1>
        <Counter emptyFlats={emptyFlatsData} />
      </h1>
      <h3>
        <Link href="/report">Report an empty flat</Link>
      </h3>
    </Layout>
  );
}
