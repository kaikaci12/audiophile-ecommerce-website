import ShopHeadphone from "../assets/image-removebg-preview(41).png";
import ShopBtn from "./ShopBtn";
import Speakers from "../assets/speakers.png";
import Earphones from "../assets/earphones.png";

const ShopItems = [
  {
    image: ShopHeadphone,
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
  return (
    <div className="flex flex-col gap-[64px] mt-[60px]">
      {ShopItems.map((product, index) => (
        <div key={index}>
          <div className="product-to-shop h-[165px] w-full rounded-[8px] bg-[#F1F1F1] flex flex-col items-center justify-end pb-[22px]">
            <img
              src={product.image}
              alt="shop-product"
              className="justify-self-center "
            />
            <h3 className="text-[#000] text-center text-[15px] font-bold tracking-[1.071px]">
              {product.product}
            </h3>
            <ShopBtn />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopProducts;
