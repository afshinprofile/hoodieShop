import { ShoppingBag, User } from "iconsax-react";
import { Link } from "react-router-dom";
import hoodie from "../../assets/hoodie.png";

function NavBar() {
  return (
    <div className="desktop-menu relative z-20 bg-white">
      <div className="container flex items-center justify-between h-20 ">
        <div className="flex gap-[22px] items-center">
          <div className="flex gap-2 items-center  logo font-EstedadEB text-3xl text-primary">
            <img src={hoodie} alt="hoodichi" className="size-12" />
            هودی شاپ
          </div>
          {/* Menu */}
          <ul className="menu flex gap-6 items-center text-base  leading-6">
            <li>
              <Link className="menu__item" to={"/"}>
                صفحه اصلی
              </Link>
            </li>
            <li className="relative group">
              <Link
                to={"/shop"}
                className="menu__item flex gap-[6px] items-center "
              >
                محصولات
              </Link>
            </li>
            <li>
              <Link className="menu__item" to={"/blog"}>
                بلاگ
              </Link>
            </li>
            <li>
              <Link className="menu__item" to={"/about-us"}>
                درباره ما
              </Link>
            </li>
            <li>
              <Link className="menu__item" to={"/contact-us"}>
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button
            type="button"
            className="relative flex items-center justify-center bg-white border border-slate-200 rounded-10 size-12"
          >
            {/* badge */}
            <span className="absolute size-[22px] rounded-full bg-primary text-white  text-10 border-2 border-white flex items-center justify-center -top-1 -right-1 cursor-pointer">
              2
            </span>
            {/* icon */}
            <ShoppingBag size={23} className="text-primary" />
          </button>
          <a
            href="#"
            className="flex gap-1 items-center h-12 px-4 rounded-10 text-base border border-primary"
          >
            <User size={24} className="text-primary " />
            ورود | عضویت
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
