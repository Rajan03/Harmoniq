import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, Loader2 } from "lucide-react";
import { useEffect } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui";
import { useVerifyEmail } from "../../hooks/verify-email";
import { AuthLayout } from "../auth-layout";
import { cn } from "@/lib/utils.ts";

export function VerifyEmail() {
  const { verifyEmail, isVerifying } = useVerifyEmail();
  const [searchParams] = useSearchParams();
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");

  useEffect(() => {
    if (secret && userId) verifyEmail(secret, userId);
  }, [secret, userId]);

  return (
    <AuthLayout>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold">
            Verifying Your Email
          </CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">
            Please wait while we verify your magic link
          </p>
        </CardHeader>
        <CardContent className="space-y-6 flex flex-col">
          <Progress verifying={isVerifying} />
          {isVerifying ? (
            <>
              <div className="flex justify-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
              </div>
              <div className="text-center text-sm text-muted-foreground">
                <p>This may take a few moments...</p>
              </div>
            </>
          ) : (
            <p className="text-sm text-center text-muted-foreground">
              Your email has been verified. You can now close this tab and
              return to the app.
            </p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <p className="text-xs text-center text-muted-foreground">
            Having trouble?{" "}
            <Link
              to="/support"
              className="font-medium text-primary hover:underline"
            >
              Contact Support
            </Link>
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}

function Progress({ verifying }: { verifying: boolean }) {
  return (
    <div className="w-auto flex justify-between items-center mb-8 mx-auto gap-x-8">
      <div className="flex-1">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium min-w-max">Link Received</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full ",
              verifying
                ? "bg-gray-400 text-gray-600"
                : "bg-green-100 text-green-600",
            )}
          >
            {verifying ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <CheckCircle className="h-6 w-6" />
            )}
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium ">
              {verifying ? "Verifying" : "Verified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
