import Link from "next/link";
import useSWR from "swr";
import ReportedFlats from "../../Components/ReportedFlats";
import { useSession } from "next-auth/react";

export default function TicketPage() {
  const { data: session, status } = useSession({ required: true });
  const { data: emptyFlatsData, isLoading: loadingEmptyFlatsData } =
    useSWR("/api/emptyFlats");

  if (loadingEmptyFlatsData) {
    return <h1>LOADING...</h1>;
  }

  if (!emptyFlatsData) {
    return;
  }

  console.log(emptyFlatsData);

  if (status === "authenticated") {
    return (
      <>
        <h1>REPORTED FLATS</h1>
        <h3>
          <Link href={"/"}>← Back to Homepage</Link>
        </h3>
        <ReportedFlats emptyFlats={emptyFlatsData} />
      </>
    );
  }
}
