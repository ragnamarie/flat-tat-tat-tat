import Form from "../Components/Form";
import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ReportPage() {
  const router = useRouter();

  const { data: session, status } = useSession({ required: true });

  const {
    data: emptyFlatsData,
    isLoading: emptyFlatsLoading,
    mutate: mutateEmptyFlats,
  } = useSWR("/api/emptyFlats");

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR(session ? `/api/users/${session.user?.googleId}` : null);

  console.log(userData);

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
      reporterName: userData.name,
      reporterMail: userData.email,
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
          <Container>
            <Link href={"/"}>← Back to Homepage</Link>
            <Link href={"/tickets"}>To Report Tickets →</Link>
          </Container>
        </h3>
        <Form onAddFlat={handleAddFlat} />
      </>
    );
  }
}
