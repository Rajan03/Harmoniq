import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/provider";

export function AuthenticationLayouts() {
  const { authenticated: isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
}

export function UnauthenticatedLayout() {
  const { authenticated: isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
