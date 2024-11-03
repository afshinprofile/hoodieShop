import { ArrowLeft } from "iconsax-react";
import { Link } from "react-router-dom";
import hoodie1 from "/products/hoodie1.webp";

function ProductCard() {
  return (
    <div className="product-card shadow-sm border border-slate-200 p-3 rounded-2xl">
      <div className="product-card__img-wrapper mb-3 border border-slate-100 w-full rounded-xl p-2">
        <img src={hoodie1} alt="#" className="object-cover aspect-square" />
      </div>
      <div className="product-card__body">
        {/* card info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-EstedadSB text-sm line-clamp-1">
            هودی مردانه مانگو مدل FG902BON
          </h3>
          <div className="flex items-center gap-1">
            <span className="font-EstedadSB">5,500,000</span>
            <span className="text-sm">تومان</span>
          </div>
        </div>
        <Link
          to={"/"}
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
