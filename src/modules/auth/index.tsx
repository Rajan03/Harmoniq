import React from "react";
import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/components/common";

// Submodules lazy loaded
const AuthModule = React.lazy(() =>
  import("./components/auth-page/auth-card.tsx").then((module) => ({
    default: module.AuthCard,
  })),
);

const VerifyEmailModule = React.lazy(() =>
  import("./components/verify/verify-email.tsx").then((module) => ({
    default: module.VerifyEmail,
  })),
);

// Routes for the auth module
export const auth_routes = {
  auth_root: "auth",
  verify_email: "verify-email",
};

// Export the routes for the auth module
export const authRoutes: RouteObject[] = [
  {
    id: auth_routes.auth_root,
    path: auth_routes.auth_root,
    errorElement: <ErrorPage />,
    element: <AuthModule />,
  },
  {
    id: auth_routes.verify_email,
    path: auth_routes.verify_email,
    errorElement: <ErrorPage />,
    element: <VerifyEmailModule />,
  },
];

// Component exports
export * from "./components/auth-actions";
