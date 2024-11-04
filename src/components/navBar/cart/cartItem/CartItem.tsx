import { CloseCircle } from "iconsax-react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  img: string;
}

function CartItem({ img, name }: Props) {
  return (
    <>
      <div className="flex items-center gap-1 w-full">
        {/* product thumbnail */}
        <img src={img} alt="" className="w-16" />
        {/* Product info */}
        <div className="flex flex-col gap-2">
          {/* product Name */}
          <Link to={"/"}>
            <p className="text-sm line-clamp-1">{name}</p>
          </Link>
          {/* product price */}
          <div className="flex items-center gap-1">
            {/* price number */}
            <span className="font-EstedadSB">2,500,000</span>
            {/* price unit */}
            <span className="text-sm">تومان</span>
          </div>
        </div>
        {/* product remove btn */}
        <button type="button" className="mr-auto">
          <CloseCircle size={20} />
        </button>
      </div>
    </>
  );
}

export default CartItem;
