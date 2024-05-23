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
import HeaderTablet from "/assets/home/tablet/image-header.jpg";
import HeaderDesktop from "/assets/home/desktop/image-hero.jpg";
import { useState, useEffect } from "react";

function HomeComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleHeaderSrc() {
    if (windowWidth < 500) {
      return blackHeadphone;
    }
    if (windowWidth < 1024 && windowWidth > 500) {
      return HeaderTablet;
    } else {
      return HeaderDesktop;
    }
  }

  return (
    <div>
      <div
        className="home-page-product  border-t-##FFF bg-black 
        w-full flex justify-center items-center lg:justify-start 
        "
        id="homepage"
      >
        <div className="flex flex-col items-center w-full justify-center ">
          <img src={handleHeaderSrc()} alt="" className="w-full " />
        </div>
        <div className="product-description lg:items-start lg:left-[168px]  flex flex-col gap-[16px] sm:gap-[20px] lg:text-start  justify-center items-center absolute   sm:max-w-[400px] sm:top-[300px]   ">
          <NewProductSpan
            className={"text-white text-center opacity-40 bg-transparent "}
          />

          <h1 className="text-[#FFF] lg:text-start  text-[36px] font-bold leading-[40px] tracking-[1.286px] text-center sm:text-[56px] sm:tracking-[2px] sm:leading-[58px]">
            XX99 Mark II HeadphoneS
          </h1>

          <p className="text-center lg:text-start  text-[#FFF]  text-[15px] font-normal leading-[25px] opacity-75 mt-[10px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <SeeProduct previousRoot={data[2].category} path={data[2].slug} />
        </div>
      </div>
      <div className="px-[24px] lg:px-[100px] ">
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
