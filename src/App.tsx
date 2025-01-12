import { RoutesProvider } from "./router/base";
import { Toaster } from "@/components/ui";
import { AuthProvider } from "@/provider";

export default function App() {
  return (
    <AuthProvider>
      <RoutesProvider />
      <Toaster />
    </AuthProvider>
  );
}
