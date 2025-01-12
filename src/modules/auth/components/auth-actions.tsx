import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { authRepository } from "../repository";
import { useTransition } from "react";
import { useAuth } from "@/provider";

export function ContinueAction() {
  return (
    <Link to={"/auth"} className={"px-4"}>
      Continue to app
    </Link>
  );
}

export function LogoutAction() {
  const [pending, startTransition] = useTransition();
  const { setAuthenticated } = useAuth();

  const logoutHandler = () =>
    startTransition(async () => {
      await authRepository.logout();
      setAuthenticated(false);
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
