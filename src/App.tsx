import { QueryProvider } from "./provider";
import { RoutesProvider } from "./router/base";

export default function App() {
  return (
    <QueryProvider>
      <RoutesProvider />
    </QueryProvider>
  );
}
