import blackHeadphone from "/assets/home/mobile/image-header.jpg";
import ShopProducts from "../components/ShopProductsComponent";
import data from "../data.json";
import ZX9Speaker from "../components/ZX9Speaker";
import ZX7Speaker from "../components/ZX7Speaker";
import YX1Earphones from "../components/YX1Earphones";
import WebDescription from "../components/WebDescription";
import Footer from "../components/Footer";
import NewProductSpan from "../components/NewProductSpan";
import SeeProduct from "../components/Directors/Button";
function HomeComponent() {
  return (
    <div>
      <div
        className="home-page-product  border-t-##FFF bg-black "
        id="homepage"
      >
        <img src={blackHeadphone} alt="" className="w-full" />
        <div className="product-description flex flex-col gap-[16px]  justify-center items-center  absolute top-[15%]">
          <h1 className="text-[#FFF] text-[36px] font-bold leading-[40px] tracking-[1.286px] text-center">
            XX99 Mark II HeadphoneS
          </h1>
          <NewProductSpan />
          <p className="text-center text text-[#FFF]  text-[15px] font-normal leading-[25px] opacity-75 mt-[10px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <SeeProduct previousRoot={data[2].category} path={data[2].slug} />
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
      <Footer />
    </div>
  );
}
export default HomeComponent;
