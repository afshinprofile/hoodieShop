import { Moneys } from "iconsax-react";
import Button from "../../components/button/Button";
import CartItemContainer from "../../components/navBar/cart/cartItem/CartItemContainer";
import productsData from "../../data/products";

function CartPage() {
  return (
    <div className="container mt-12">
      <div className="grid grid-cols-12 gap-12">
        {/* Cart items */}
        <div className="col-span-8 border border-slate-200 px-5 py-4 rounded-2xl">
          <CartItemContainer data={productsData} />
        </div>
        {/* cart price */}
        <div className="col-span-4 border border-slate-200 px-5 py-4 rounded-2xl">
          <div className="flex flex-col justify-end h-full">
            <div className="flex items-center justify-between mb-4">
              {/* right */}
              <div className="flex gap-[6px] items-center font-EstedadSB">
                <Moneys size={24} />
                مجموع هزینه:
              </div>
              {/* left */}
              <div className="flex items-center gap-1">
                <span className="font-EstedadSB">5,500,000</span>
                <span className="text-sm">تومان</span>
              </div>
            </div>
            <div className="w-full">
              <Button variant="primary">پرداخت نهایی</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
