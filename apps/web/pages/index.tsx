import { Button } from "ui";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../lib/trpc";

const AuthShowcase: React.FC = () => {
  // TODO: show queries

  // const { data: session } = trpc.auth.getSession.useQuery();

  // const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: !!session?.user },
  // );

  const session = useSession();
  console.log(session);
  return (
    <div>
      {session?.data?.user && (
        <p>
          {session && <span>Logged in as {session?.data?.user?.email}</span>}
          {/* {secretMessage && <span> - {secretMessage}</span>} */}
        </p>
      )}
      <button
        onClick={
          session.status === "authenticated" ? () => signOut() : () => signIn()
        }
      >
        {session.status === "authenticated" ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default function Web() {
  return (
    <div>
      <AuthShowcase />
      <Button />
    </div>
  );
}
