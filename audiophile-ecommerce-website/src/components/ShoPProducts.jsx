import ShopHeadphone from "../assets/image-removebg-preview(41).png";
import ShopBtn from "./ShopBtn";
import Speakers from "../assets/speakers.png";
import Earphones from "../assets/earphones.png";
const ShopItems = [
  {
    image: Earphones,
    product: "HEADPHONES",
  },
  {
    image: Speakers,
    product: "SPEAKERS",
  },
  {
    image: Earphones,
    product: "EARPHONES",
  },
];
function ShopProducts() {
  return ShopItems.map((product) => {
    <div>
      <div>
        <img
          src={product.image}
          alt="headphone"
          className="w-[79.916px] h-[104px] absolute  bg-transparent left-[39%] bottom-[2%]"
        />
        <div className="w-full px-[24px] py-[0] flex flex-col gap-[68px] mt-[90px]">
          <div className="product-to-shop h-[165px] w-full rounded-[8px] bg-[#F1F1F1] flex flex-col items-center justify-end pb-[22px]">
            <h3 className="text-[#000] text-center text-[15px] font-bold tracking-[1.071px]">
              {product.product}
            </h3>
            <ShopBtn />
          </div>
        </div>
      </div>
    </div>;
  });
}
export default ShopProducts;
