import { useQueryClient } from "@tanstack/react-query";
import { Product } from "./useProducts";

function useProductCache() {
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData<Product[]>(["products"]);
  return product;
}

export default useProductCache;
