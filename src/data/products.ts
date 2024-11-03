import hoodie1 from "/products/hoodie1.webp";
import hoodie2 from "/products/hoodie2.webp";
import hoodie3 from "/products/hoodie3.webp";

export interface Product {
  name: string;
  img: string;
}
const productsData: Product[] = [
  { name: "هودی مردانه مانگو مدل FG902BON", img: hoodie1 },
  { name: "هودی مردانه مانگو مدل WT718ARL", img: hoodie2 },
  { name: "هودی مردانه مانگو مدل MB902BON", img: hoodie3 },
];

export default productsData;
