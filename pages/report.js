import Form from "../Components/Form";
import useSWR from "swr";

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
    const apartment = formData.get("apartment"); // corrected from formData.get("address")
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
      <Form onAddFlat={handleAddFlat} />
    </>
  );
}
