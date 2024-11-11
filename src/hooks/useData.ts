import { useQuery } from "@tanstack/react-query";
import client from "../services/api-client";

function useData<T>(endpoint: string, queryKey: string | number[]) {
  const MINUTE = 1000 * 60;
  const { data, isLoading, error } = useQuery<T[], Error>({
    queryKey: [queryKey],
    queryFn: () => client.get<T[]>(endpoint).then((res) => res.data),
    staleTime: 5 * MINUTE,
    gcTime: 5 * MINUTE,
  });
  return { data, error, isLoading };
}

export default useData;
