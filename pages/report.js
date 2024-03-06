import Form from "../Components/Form";
import useSWR from "swr";
import Link from "next/link";

export default function ReportPage() {
  const {
    data: emptyFlatsData,
    isLoading: emptyFlatsLoading,
    mutate: mutateEmptyFlats,
  } = useSWR("/api/emptyFlats");

  async function handleAddFlat(event) {
    console.log("Button clicked");
    event.preventDefault();

    const formData = new FormData(event.target);
    const address = formData.get("address");
    const apartment = formData.get("apartment");
    const namesOnDoorbell = formData.get("name");

    const emptyFlats = {
      address: address,
      apartment: apartment,
      namesOnDoorbell: namesOnDoorbell,
    };

    const response = await fetch(`/api/emptyFlats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emptyFlats),
    });

    if (response.ok) {
      mutateEmptyFlats();
    }

    console.log(emptyFlats);
  }

  return (
    <>
      <h1>REPORT AN EMPTY FLAT</h1>
      <Link href={"/"}>← Back to Homepage</Link>
      <Form onAddFlat={handleAddFlat} />
    </>
  );
}
