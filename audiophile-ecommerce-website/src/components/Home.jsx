import blackHeadphone from "../assets/Bitmap.png";
import "./Home.module.css";
import ShopProducts from "./ShopProductsComponent";
import Button from "./Button";
import ZX9Speaker from "./ZX9Speaker";
import ZX7Speaker from "./ZX7Speaker";
import YX1Earphones from "./YX1Earphones";
import WebDescription from "./WebDescription";
import AudioPhile from "./Directors/Audiophile";
import ShoppingCart from "./Directors/ShoppingCart";
import BurgerMenu from "./Directors/BurgerMenu";
function HomeComponent() {
  return (
    <div>
      <header className="bg-neutral-950 flex justify-between  h-[89px] items-center px-[24px]">
        <BurgerMenu />
        <AudioPhile />
        <ShoppingCart />
      </header>
      <div
        className="home-page-product  border-t-##FFF bg-black "
        id="homepage"
      >
        <img src={blackHeadphone} alt="" className="w-full" />
        <div className="product-description flex flex-col gap-[16px]  justify-center items-center  absolute top-[15%]">
          <span className="text-[#FFF] text-center text-[14px]  tracking-[10px] opacity-50 mt-[108px]">
            NEW PRODUCT
          </span>
          <h1 className="text-[#FFF] text-[36px] font-bold leading-[40px] tracking-[1.286px] text-center">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="text-center text text-[#FFF]  text-[15px] font-normal leading-[25px] opacity-75 mt-[10px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button />
        </div>
      </div>
      <div className="px-[24px]">
        <ShopProducts />

        <div className="flex flex-col gap-[24px]">
          <ZX9Speaker />
          <ZX7Speaker />
          <YX1Earphones />
          <WebDescription />
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;
