import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/components/common";

// Layout
import { AuthLayout } from "./components/auth-layout.tsx";

// Routes for the auth module
export const auth_routes = {
  auth_root: "",
  login: "login",
  register: "register",
  forgot_password: "forgot-password",
  reset_password: "reset-password",
  verify_email: "verify-email",
};

// Export the routes for the auth module
export const authRoutes: RouteObject[] = [
  {
    id: auth_routes.auth_root,
    path: auth_routes.auth_root,
    errorElement: <ErrorPage />,
    element: <AuthLayout />,
    children: [
      {
        id: auth_routes.login,
        path: auth_routes.login,
        element: <div>Login</div>,
      },
      {
        id: auth_routes.register,
        path: auth_routes.register,
        element: <div>Register</div>,
      },
      {
        id: auth_routes.forgot_password,
        path: auth_routes.forgot_password,
        element: <div>Forgot Password</div>,
      },
      {
        id: auth_routes.reset_password,
        path: auth_routes.reset_password,
        element: <div>Reset Password</div>,
      },
      {
        id: auth_routes.verify_email,
        path: auth_routes.verify_email,
        element: <div>Verify Email</div>,
      },
    ],
  },
];
