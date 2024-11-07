import { Image } from "iconsax-react";

function ProductCardSkeleton() {
  return (
    <div className="product-card shadow-sm border border-slate-200 p-3 rounded-2xl">
      <div className="flex items-center justify-center mb-3 border border-slate-100 w-full h-64 rounded-xl bg-gray-200 animate-pulse">
        <Image variant="Bulk" size={42} />
      </div>
      <div className="product-card__body">
        {/* card info */}
        <div className="flex flex-col gap-2">
          <div className="h-3 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-2 bg-gray-200 w-1/2 rounded-full"></div>
        </div>
        <div className="h-9 bg-gray-200 rounded-10 mt-5 animate-pulse"></div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
