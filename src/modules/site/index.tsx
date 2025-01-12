import type { RouteObject } from "react-router-dom";
import { ErrorPage } from "@/components/common";
import { Navbar } from "@/modules/site/components/navbar.tsx";

// Routes for the site module
export const site_routes = {
  home: "",
  privacy: "privacy",
  terms: "terms",
  support: "support",
};

// Export the routes for the auth module
export const siteRoutes: RouteObject[] = [
  {
    id: site_routes.home,
    index: true,
    // path: site_routes.home,
    errorElement: <ErrorPage />,
    element: (
      <div>
        <Navbar />
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </div>
    ),
  },
  {
    id: site_routes.privacy,
    path: site_routes.privacy,
    errorElement: <ErrorPage />,
    element: <div>Privacy</div>,
  },
  {
    id: site_routes.terms,
    path: site_routes.terms,
    errorElement: <ErrorPage />,
    element: <div>Terms</div>,
  },
  {
    id: site_routes.support,
    path: site_routes.support,
    errorElement: <ErrorPage />,
    element: <div>Support</div>,
  },
];
