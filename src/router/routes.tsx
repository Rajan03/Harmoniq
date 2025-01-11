import { administrationRoutes } from "@/modules/administration";
import { ErrorPage, NotFound, PrivateLayout } from "@/components/common";

export function combinedRoutes() {
  return [
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <PrivateLayout />,
      children: [...administrationRoutes],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
}
