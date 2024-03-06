import Form from "../Components/Form";

export default function ReportPage() {
  function handleAddFlat(event) {
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

    console.log(emptyFlats);
  }

  return (
    <>
      <Form onAddFlat={handleAddFlat} />
    </>
  );
}
