export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer>
        <p>
          <small>flat-tat-tat-tat&copy;</small>
        </p>
      </footer>
    </>
  );
}
