import ShopHeadphone from "/assets/image-removebg-preview(41).png";
import ShopBtn from "./ShopBtn";
import Speakers from "/assets/speakers.png";
import Earphones from "/assets/earphones.png";
import { Link } from "react-router-dom";
const ShopItems = [
  {
    image: ShopHeadphone,
    product: "headphones",
  },
  {
    image: Speakers,
    product: "speakers",
  },
  {
    image: Earphones,
    product: "earphones",
  },
];

function ShopProducts() {
  return (
    <div className="flex flex-col gap-[64px] mt-[60px] sm:flex-row lg:gap-[30px] sm:gap-[10px] lg:mt-[100px]">
      {ShopItems.map((product, index) => (
        <div key={index} className="w-full">
          <div className="product-to-shop h-[165px] w-full rounded-[8px] bg-[#F1F1F1] flex flex-col items-center justify-end pb-[22px]">
            <img src={product.image} alt="shop-product" className="" />
            <h3 className="text-[#000] text-center text-[15px] font-bold tracking-[1.071px] uppercase">
              {product.product}
            </h3>

            <ShopBtn path={product.product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopProducts;
