import useSWR from "swr";
import { useRouter } from "next/router";
import ReportedFlatsDetails from "../../Components/ReportedFlatsDetails";

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
    <ReportedFlatsDetails
      street={data.street}
      zip={data.zip}
      apartment={data.apartment}
      namesOnDoorbell={data.namesOnDoorbell}
      isConfirmedEmpty={data.isConfirmedEmpty}
    />
  );
}
