import {QueryClient} from "@tanstack/react-query";

const AppQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      keepPreviousData: true,
    },
  },
});

export default AppQueryClient;
