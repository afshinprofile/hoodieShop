import { Product } from "../../../../data/products";
import CartItem from "./CartItem";

interface Props {
  data: Product[];
}

function CartItemContainer({ data }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 ">
      {data.map((data, index) => (
        <CartItem key={index} img={data.img} name={data.name} />
      ))}
    </div>
  );
}

export default CartItemContainer;
