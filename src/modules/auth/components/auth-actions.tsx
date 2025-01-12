import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { authRepository } from "../repository";
import { useTransition } from "react";

export function ContinueAction() {
  return (
    <Link to={"/auth"} className={"px-4"}>
      Continue to app
    </Link>
  );
}

export function LogoutAction() {
  const [pending, startTransition] = useTransition();

  const logoutHandler = () =>
    startTransition(async () => {
      await authRepository.logout();
    });

  return (
    <Button
      disabled={pending}
      size={"sm"}
      onClick={logoutHandler}
      className={"px-4"}
    >
      {pending ? "Logging out..." : "Logout"}
    </Button>
  );
}
