import { useSession, signIn, signOut } from "next-auth/react";

export default function LogIn() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p>you are logged in with {session.user.email}</p>
        <button onClick={() => signOut()}>SIGN OUT</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>you are not signed in.</p>
        <button onClick={() => signIn()}>SIGN IN</button>
      </div>
    );
  }
}
