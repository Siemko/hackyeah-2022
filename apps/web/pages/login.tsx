import { Button } from "ui";
import { getSession, signIn } from "next-auth/react";
export default function Web() {
  const session = getSession();
  session.then(console.log);
  return (
    <div>
      <h1
        onClick={() => {
          alert(1);
          signIn("email", {
            email: "dominik.guzy@gorrion.io",
            callbackUrl: window.location.origin + "/dashboard",
          });
        }}
      >
        Web
      </h1>
      <Button />
    </div>
  );
}
