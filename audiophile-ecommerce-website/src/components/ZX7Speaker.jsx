import ZX7 from "/assets/home/mobile/image-speaker-zx7.jpg";
import SeeProduct from "./Directors/Button";
import ZX7Tablet from "/assets/home/tablet/image-speaker-zx7.jpg";
import ZX7Desktop from "/assets/home/desktop/image-speaker-zx7.jpg";
import { useEffect, useState } from "react";
function ZX7Speaker() {
  const path = "zx7-speaker";
  const previousRoot = "speakers";
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
      return ZX7;
    }
    if (windowWidth > 640 && windowWidth < 1024) {
      return ZX7Tablet;
    }
    return ZX7Desktop;
  }

  return (
    <div
      className="w-full h-[320px] rounded-[8px]  bg-[#F1F1F1] bg-cover bg-center flex flex-col justify-center items-center sm:items-start sm:px-[50px]"
      style={{
        backgroundImage: `url(${handleImage()})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-[3]">
        <h2 className="text-[#000] text-[28px] font-bold tracking-[2px]">
          ZX7 SPEAKER
        </h2>

        <SeeProduct
          className={
            "border-[1px] border-[solid] border-[#000] bg-transparent text-[black]"
          }
          path={path}
          previousRoot={previousRoot}
        />
      </div>
    </div>
  );
}

export default ZX7Speaker;
