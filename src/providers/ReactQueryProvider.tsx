import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";

const MINUTE = 1000 * 60;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MINUTE * 5,
      gcTime: MINUTE * 10,
      retry: 2,
    },
  },
});

function ReactQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
