import YX1 from "/assets/home/mobile/image-earphones-yx1.jpg";
import SeeProduct from "./Directors/Button";
import YX1Tablet from "/assets/home/tablet/image-earphones-yx1.jpg";
import YX1Desktop from "/assets/home/desktop/image-earphones-yx1.jpg";
import { useState, useEffect } from "react";
export default function YX1Earphones() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleImage() {
    if (windowWidth < 640) {
      return YX1;
    }
    if (windowWidth > 640 && windowWidth < 1024) {
      return YX1Tablet;
    }
    return YX1Desktop;
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const path = "yx1-earphones";
  const previousPath = "earphones";
  return (
    <div className="flex flex-col gap-[24px] items-start justify-start sm:flex-row">
      <img
        src={handleImage()}
        alt="product"
        className="w-full sm:w-[50%] lg:h-[320px]"
      />
      <div className="h-[200px] w-full rounded-[8px] sm:h-[372px] sm:px-[40px] lg:h-[320px] bg-[#F1F1F1] flex flex-col items-start justify-center gap-[32px] px-[24px]">
        <h2 className="text-[#000] text-[28px] font-bold tracking-[2px]">
          YX1 EARPHONES
        </h2>
        <SeeProduct
          className={
            "border-[1px] border-[solid] border-[#000] bg-transparent text-[black]"
          }
          path={path}
          previousRoot={previousPath}
        />
      </div>
    </div>
  );
}
