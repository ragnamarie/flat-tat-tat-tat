import useSWR from "swr";
import { useRouter } from "next/router";
import ReportedFlatsDetails from "../../Components/ReportedFlatsDetails";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function TicketDetailsPage() {
  const { data: session, status } = useSession({ required: true });
  const router = useRouter();
  const { id } = router.query;

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR(session ? `/api/users/${session.user?.googleId}` : null);

  const { data, isLoading, mutate } = useSWR(`/api/emptyFlats/${id}`);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data._id);
  console.log(data);
  console.log(userData?.email);
  console.log(data.reporterMail);
  console.log(userData?.admin);

  const isAdmin = userData?.admin;

  async function handleStatusChange() {
    console.log("handleSlotRelease function is called");
    // Assuming `id` is available here
    const response = await fetch(`/api/emptyFlats/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isConfirmedEmpty: true }), // Change the property value
    });

    if (response.ok) {
      // Update the local data if the request is successful
      mutate(
        `/api/emptyFlats/${id}`,
        { ...data, isConfirmedEmpty: true },
        false
      );
    }
  }

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  if (!data) {
    return <h1>Data not found</h1>; // Handle data not found case
  }

  if (
    (status === "authenticated" && userData?.email === data.reporterMail) ||
    isAdmin === true
  ) {
    return (
      <>
        <h1>{data.street}</h1>
        <h3>
          <Link href={"/tickets"}>← Back to Overview</Link>
        </h3>
        <ReportedFlatsDetails
          street={data.street}
          zip={data.zip}
          apartment={data.apartment}
          namesOnDoorbell={data.namesOnDoorbell}
          isConfirmedEmpty={data.isConfirmedEmpty}
          report={data.report}
          onStatusChange={handleStatusChange}
        />
      </>
    );
  }
}
