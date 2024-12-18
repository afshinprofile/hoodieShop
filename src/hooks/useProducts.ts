import useData from "./useData";

export interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
  img_placeholder: string;
  description: string;
}

const useProducts = () => useData<Product>("/products",'products');

export default useProducts;
