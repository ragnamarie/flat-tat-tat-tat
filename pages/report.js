import Form from "../Components/Form";
import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ReportPage() {
  const router = useRouter();

  const { data: session, status } = useSession({ required: true });

  const {
    data: emptyFlatsData,
    isLoading: emptyFlatsLoading,
    mutate: mutateEmptyFlats,
  } = useSWR("/api/emptyFlats");

  async function handleAddFlat(event) {
    console.log("Button clicked");
    event.preventDefault();

    const formData = new FormData(event.target);
    const street = formData.get("street");
    const zip = formData.get("zip");
    const apartment = formData.get("apartment");
    const namesOnDoorbell = formData.get("name");
    const report = formData.get("report");

    const emptyFlats = {
      street: street,
      zip: zip,
      apartment: apartment,
      namesOnDoorbell: namesOnDoorbell,
      report: report,
      isConfirmedEmpty: false,
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
      router.push("/confirmation");
    }

    console.log(emptyFlats);
  }

  if (status === "authenticated") {
    return (
      <>
        <h1>REPORT AN EMPTY FLAT</h1>
        <h3>
          <Link href={"/"}>← Back to Homepage</Link>
        </h3>
        <Form onAddFlat={handleAddFlat} />
      </>
    );
  }
}
