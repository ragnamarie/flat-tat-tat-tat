import useSWR from "swr";
import { useRouter } from "next/router";
import ReportedFlatsDetails from "../../Components/ReportedFlatsDetails";
import Link from "next/link";

export default function TicketDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/emptyFlats/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data._id);

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
      />
    </>
  );
}
