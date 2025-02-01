import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UseSelectedButtonProvider } from "./hooks/useSelectedButton";
import { Home } from "./pages/Home";
import "./styles/app.css";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UseSelectedButtonProvider>
        <Home />
      </UseSelectedButtonProvider>
    </QueryClientProvider>
  );
}
