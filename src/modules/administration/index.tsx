import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/components/common";

// Layout
import { AdministrationLayout } from "./components/administration-layout";

// Routes for the administration module
export const admin_routes = {
  Administration: "administration",
};

// Export the routes for the administration module
export const administrationRoutes: RouteObject[] = [
  {
    id: admin_routes.Administration,
    path: admin_routes.Administration,
    errorElement: <ErrorPage />,
    element: <AdministrationLayout />,
  },
];
