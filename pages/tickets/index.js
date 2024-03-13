import Link from "next/link";
import useSWR from "swr";
import ReportedFlats from "../../Components/ReportedFlats";
import { useSession } from "next-auth/react";

export default function TicketPage() {
  const { data: session, status } = useSession({ required: true });
  const { data: emptyFlatsData, isLoading: loadingEmptyFlatsData } =
    useSWR("/api/emptyFlats");

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR(session ? `/api/users/${session.user?.googleId}` : null);

  if (loadingEmptyFlatsData) {
    return <h1>LOADING...</h1>;
  }

  if (!emptyFlatsData) {
    return;
  }

  console.log(userData);
  console.log(userData?.email);
  console.log(emptyFlatsData);

  if (status === "authenticated") {
    const userEmail = userData?.email;

    // Filter empty flats based on reporterMail
    const userEmptyFlats = emptyFlatsData.filter(
      (flat) => flat.reporterMail === userEmail
    );

    console.log(userEmptyFlats);
    return (
      <>
        <h1>REPORTED FLATS</h1>
        <h3>
          <Link href={"/"}>← Back to Homepage</Link>
        </h3>
        <ReportedFlats emptyFlats={userEmptyFlats} />
      </>
    );
  }
}
