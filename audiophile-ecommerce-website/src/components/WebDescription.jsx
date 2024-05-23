import ManWithHeadphones from "/assets/shared/mobile/image-best-gear.jpg";
import ManTablet from "/assets/shared/tablet/image-best-gear.jpg";
import ManDesktop from "/assets/shared/desktop/image-best-gear.jpg";
import { useState, useEffect } from "react";
export default function WebDescription() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function handleImage() {
    if (windowWidth < 640) {
      return ManWithHeadphones;
    }
    if (windowWidth > 640 && windowWidth < 1024) {
      return ManTablet;
    }
    return ManDesktop;
  }
  return (
    <div className="flex flex-col gap-[40px] mt-[96px] lg:flex-row-reverse">
      <img src={handleImage()} alt="person" className="w-full rounded-[8px]" />
      <div className="flex flex-col gap-[32px] items-center justify-center w-full sm:px-[50px] lg:min-w-[445px]">
        <h2 className="text-[#000] text-[28px] lg:text-start  text-center font-bold tracking-[1px] uppercase inline-block ">
          Bringing you the best audio gear
        </h2>
        <p className="text-[#000] text-center text-[15px] font-normal lg:text-start leading-[25px] opacity-50 ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
