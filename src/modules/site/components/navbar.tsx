import { Link } from "react-router-dom";
import { useAuth } from "@/provider";
import { ContinueAction, LogoutAction } from "@/modules/auth";

export function Navbar() {
  const { authenticated } = useAuth();
  return (
    <div
      className={
        "shadow h-12 w-full flex justify-between items-center px-8 py-4"
      }
    >
      <img className={"h-8"} src={"/logo.svg"} alt={"logo"} />

      <div className={"flex items-center justify-end"}>
        <Link to={"/"} className={"px-4"}>
          Home
        </Link>
        <Link to={"/privacy"} className={"px-4"}>
          Privacy
        </Link>
        <Link to={"/terms"} className={"px-4"}>
          Terms
        </Link>
        <Link to={"/support"} className={"px-4"}>
          Support
        </Link>
        <Link to={"/administration/network"} className={"px-4"}>
          Network
        </Link>
        {authenticated ? <LogoutAction /> : <ContinueAction />}
      </div>
    </div>
  );
}
