import { useQuery } from "@tanstack/react-query";
import client from "../services/api-client";

function useData<T>(endpoint: string, queryKey: string | number[]) {
  const { data, isLoading, error } = useQuery<T[], Error>({
    queryKey: [queryKey],
    queryFn: () => client.get<T[]>(endpoint).then((res) => res.data),
  });
  return { data, error, isLoading };
}

export default useData;
