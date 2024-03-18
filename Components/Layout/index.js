import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer>
        <p>
          <small>flat-tat-tat-tat&copy;</small>
        </p>
        <small>
          <Link href="/tickets">Admin Login</Link>
        </small>
      </footer>
    </>
  );
}
