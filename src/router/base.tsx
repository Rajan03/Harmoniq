import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { combinedRoutes } from "./routes";

export function RoutesProvider(): React.JSX.Element {
  const browserRouter = createBrowserRouter(combinedRoutes());
  return <RouterProvider router={browserRouter} />;
}
