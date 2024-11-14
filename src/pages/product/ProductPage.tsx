import { ShoppingCart } from "iconsax-react";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import ImageLoader from "../../components/ImageLoader";
import useProducts from "../../hooks/useProducts";
function ProductPage() {
  const { id } = useParams();
  const { data } = useProducts();
  const product = data?.find((item) => item.id === Number(id));

  return (
    <div>
      <div className="container mt-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4 border border-slate-300 rounded-2xl p-3 h-96">
            <div className="flex items-center justify-center h-full">
              {product?.img_url && product.img_placeholder && (
                <ImageLoader
                  src={product?.img_url}
                  hash={product?.img_placeholder}
                  alt=""
                />
              )}
            </div>
          </div>
          {/* product details */}
          <div className="col-span-8">
            <div className="flex flex-col gap-5 h-full">
              {/* product name */}
              <h1 className="font-EstedadBold text-3xl">{product?.name}</h1>
              {/* product description */}
              <p className="font-EstedadRegular ">{product?.description}</p>
              {/* product add to cart button */}
              <div className="w-72 mt-auto">
                <Link to={"/cart"}>
                  <Button variant="primary" icon={<ShoppingCart />}>
                    افزودن به سبد خرید
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
