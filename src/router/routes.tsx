import { ErrorPage, NotFound, PrivateLayout } from "@/components/common";

// Modules routes
import { authRoutes } from "@/modules/auth";
import { administrationRoutes } from "@/modules/administration";

export function combinedRoutes() {
  return [
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <PrivateLayout />,
      children: [...administrationRoutes, ...authRoutes],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
}
