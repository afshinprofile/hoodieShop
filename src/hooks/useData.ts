import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import client from "../services/api-client";

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    client
      .get<T[]>(endpoint, { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
}

export default useData;
