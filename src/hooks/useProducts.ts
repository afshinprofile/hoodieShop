import useData from "./useData";

export interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
  description: string;
}

const useProducts = () => {
  useData<Product>("/products");
};

export default useProducts;
