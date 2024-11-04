import { ShoppingCart } from "iconsax-react";
import Button from "../../components/button/Button";
import hoodie1 from "/products/hoodie1.webp";
function ProductPage() {
  return (
    <div>
      <div className="container mt-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4 border border-slate-300 rounded-2xl p-3">
            <img src={hoodie1} alt="hoodie1" className="object-cover" />
          </div>
          {/* product details */}
          <div className="col-span-8">
            <div className="flex flex-col gap-5 h-full">
              {/* product name */}
              <h1 className="font-EstedadBold text-3xl">
                هودی مردانه مانگو مدل FG902BON
              </h1>
              {/* product description */}
              <p className="font-EstedadRegular ">
                هودی جلو بسته و کلاهدار مردانه سبز (FOREST GREEN) تهیه شده از
                67% الیاف نخی و 33% پلی استر دارای دو جیب در طرفین کلاه دارای
                بند قابل تنظیم دارای پارچه لطیف، داخل کرکی و گرم لبه آستین ها و
                پایین لباس کشبافت دارد دارای فرم معمولی (REGULAR FIT) مناسب برای
                استفاده روزمره مدل در عکسها سایز M را پوشیده است جهت انتخاب سایز
                مناسب به جدول راهنمای سایز در عکسها مراجعه نمایید
              </p>
              {/* product add to cart button */}
              <div className="w-72 mt-auto">
                <Button variant="primary" icon={<ShoppingCart />}>
                  افزودن به سبد خرید
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
