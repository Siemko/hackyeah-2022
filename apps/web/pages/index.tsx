import { Button } from "ui";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../lib/trpc";

const AuthShowcase: React.FC = () => {
  // TODO: show queries

  const { data: session } = trpc.authorization.getSession.useQuery();

  const { data: secretMessage } = trpc.authorization.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: !!session?.user },
  );
  return (
    <div>
      {session?.user && (
        <p>
          {session && <span>Logged in as {session?.user?.email}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
      )}
      <button
        onClick={
          session ? () => signOut() : () => signIn()
        }
      >
        {session ? "Sign out" : "Sign in"}
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
