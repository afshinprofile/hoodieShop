import { ArrowLeft, CloseCircle, Moneys, ShoppingBag } from "iconsax-react";
import { Link } from "react-router-dom";
import productsData from "../../../data/products";
import CartItemContainer from "./cartItem/CartItemContainer";

interface Props {
  openCart: boolean;
  onClick: () => void;
}

function Cart({ onClick, openCart }: Props) {
  return (
    <div className="cart relative z-20">
      {/* Cart Button */}
      <button
        onClick={onClick}
        type="button"
        className="cart__btn relative flex items-center justify-center bg-white border border-slate-200 rounded-10 size-12"
      >
        {/* badge */}
        <span className="absolute size-[22px] rounded-full bg-primary text-white  text-10 border-2 border-white flex items-center justify-center -top-1 -right-1 cursor-pointer">
          2
        </span>
        {/* icon */}
        <ShoppingBag size={23} className="text-primary" />
      </button>

      {/* Cart Body */}
      <div
        className={`cart__body absolute w-[320px] transition-all duration-[120ms]  rounded-xl bg-white py-4 px-5 left-0 top-[64px] ${
          openCart == false && "opacity-0 invisible"
        }`}
      >
        {/* close cart popover */}
        <button
          onClick={onClick}
          type="button"
          className="mr-auto absolute right-0 -top-[32px]"
        >
          <CloseCircle size={20} className="text-white" />
        </button>
        {/* Cart header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-3">
          {/* Cart title */}
          <span className="font-EstedadSB text-base">سبد خرید من</span>
          {/* Cart Counter */}
          <span className="text-sm text-[#667085] ">3 مورد</span>
        </div>
        {/* Cart Items */}
        <CartItemContainer data={productsData} />
        {/* Cart Footer */}
        <div className="border-t border-slate-100 pt-5 mt-5">
          {/* cartPrice Wrapper */}
          <div className="flex items-center justify-between">
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
          {/* Cart Link */}
          <Link
            to={"/"}
            className="flex items-center justify-center h-12 gap-2 bg-primary text-white rounded-10 mt-5"
          >
            تسویه حساب
            <ArrowLeft />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
