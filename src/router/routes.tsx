import { administrationRoutes } from "@/modules/administration";
import { caseManagementRoutes } from "@/modules/case-study";
import { ErrorPage, NotFound, PrivateLayout } from "@/components/common";

export function combinedRoutes() {
  return [
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <PrivateLayout />,
      children: [...administrationRoutes, ...caseManagementRoutes],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
}
