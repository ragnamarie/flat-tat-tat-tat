import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <>
      <h2>
        Thanks for letting us know! We will investigate accordingly. The current
        status of your inquiry can be found in your report tickets. Should we
        need any further information from you we will get in touch.
      </h2>
      <h3>
        <Link href={"/tickets"}>← to Report Tickets</Link>
      </h3>
    </>
  );
}
