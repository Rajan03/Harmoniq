import {
  ErrorPage,
  NotFound,
  AuthenticationLayouts,
  UnauthenticatedLayout,
} from "@/components/common";

// Modules routes TODO: Lazy load modules
import { siteRoutes } from "@/modules/site";
import { authRoutes } from "@/modules/auth";
import { administrationRoutes } from "@/modules/administration";

export function combinedRoutes() {
  return [
    ...siteRoutes,
    {
      errorElement: <ErrorPage />,
      element: <UnauthenticatedLayout />,
      children: [...authRoutes],
    },
    {
      errorElement: <ErrorPage />,
      element: <AuthenticationLayouts />,
      children: [...administrationRoutes],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
}
