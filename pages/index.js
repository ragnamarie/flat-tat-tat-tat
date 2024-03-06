import useLocalStorageState from "use-local-storage-state";
import Counter from "../Components/Counter";
import { useRouter } from "next/router";
import Link from "next/link";

export default function HomePage() {
  const [emptyFlats, setEmptyFlats] = useLocalStorageState("emptyFlats", {
    defaultValue: [],
  });

  return (
    <>
      <Counter emptyFlats={emptyFlats} />
      <Link href="/report">report an empty flat</Link>
    </>
  );
}
