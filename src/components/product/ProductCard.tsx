import { ArrowLeft } from "iconsax-react";
import { Link } from "react-router-dom";
import ImageLoader from "../ImageLoader";
interface Props {
  id: number;
  img: string;
  hash: string;
  name: string;
  price: number;
}
function ProductCard({ id, img, name, price, hash }: Props) {
  return (
    <div className="product-card shadow-sm border border-slate-200 p-3 rounded-2xl">
      <div className=" flex items-center justify-center overflow-hidden h-64 p-2 mb-3 border border-slate-100 w-full rounded-xl">
        <ImageLoader
          src={img}
          hash={hash}
          alt="#"
          className=" object-cover w-full h-full"
        />
      </div>
      <div className="product-card__body">
        {/* card info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-EstedadSB text-sm line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1">
            <span className="font-EstedadSB">
              {price.toLocaleString("fa-IR")}
            </span>
            <span className="text-sm">تومان</span>
          </div>
        </div>
        <Link
          to={`/product/${id}`}
          className="flex items-center justify-center h-9 gap-2 bg-primary text-sm text-white rounded-10 mt-5"
        >
          مشاهده محصول
          <ArrowLeft size={20} />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
