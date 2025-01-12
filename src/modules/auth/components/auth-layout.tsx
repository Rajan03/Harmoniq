import { AuthProvider } from "../hooks/auth";
import React from "react";

export function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <AuthProvider>
      <div className={"flex justify-center items-center h-screen"}>
        {children}
      </div>
    </AuthProvider>
  );
}
