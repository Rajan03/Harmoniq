import React from "react";
import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/components/common";

// Layout
import { AdministrationLayout } from "./components/administration-layout";

// Submodules lazy load
const AddNetworkPage = React.lazy(() =>
  import("./network/pages/add-network-page").then((module) => ({
    default: module.default,
  })),
);

// Routes for the administration module
export const admin_routes = {
  Administration: "administration",
  Network: "network",
};

// Export the routes for the administration module
export const administrationRoutes: RouteObject[] = [
  {
    id: admin_routes.Administration,
    path: admin_routes.Administration,
    errorElement: <ErrorPage />,
    element: <AdministrationLayout />,
    children: [
      {
        id: admin_routes.Network,
        path: admin_routes.Network,
        element: <AddNetworkPage />,
      },
    ],
  },
];
