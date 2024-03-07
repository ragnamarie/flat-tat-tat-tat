import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}
