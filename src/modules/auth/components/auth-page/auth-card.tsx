import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";
import { AuthForm } from "./auth-form";
import { AuthLayout } from "../auth-layout";

export function AuthCard() {
  return (
    <AuthLayout>
      <Card className={"w-96"}>
        <CardHeader>
          <CardTitle>Hey, Welcome here!</CardTitle>
          <CardDescription>
            Sign in with magic link sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm />
        </CardContent>
        <CardFooter className={"flex flex-col gap-y-8"}>
          <p className={"text-center text-xs text-gray-500"}>
            By signing in, you agree to our &nbsp;
            <Link to={"/terms"} className={"text-primary"}>
              Terms of Service
            </Link>
            &nbsp; and &nbsp;
            <Link to={"/privacy"} className={"text-primary"}>
              Privacy Policy
            </Link>
          </p>

          <Link to={"/support"} className={"text-center text-xs text-gray-500"}>
            Need help? <span className={"text-primary"}> Contact support</span>
          </Link>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
