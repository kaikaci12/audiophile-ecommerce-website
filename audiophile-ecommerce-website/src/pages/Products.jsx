import data from "../data.json";
import { useParams } from "react-router";
import NewProductSpan from "../components/NewProductSpan";
import SeeProduct from "../components/Directors/Button";
import { useState, useEffect } from "react";

export default function Products() {
  const params = useParams();
  const products = data.filter(
    (productObj) => productObj.category === params.products
  );

  console.log(params);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleImage(product) {
    if (windowWidth < 500) {
      return product.categoryImage.mobile;
    }
    if (windowWidth < 1024 && windowWidth > 500) {
      return product.categoryImage.tablet;
    } else {
      return product.categoryImage.desktop;
    }
  }
  return (
    <div className="">
      <div className="h-[100px] bg-black uppercase text-white flex justify-center items-center sm:h-[247px]">
        <h2 className="text-center text-[#FFF]  text-[28px] font-bold leading-[normal] tracking-[2px] uppercase">
          {params.products}
        </h2>
      </div>
      <div className="px-[24px] flex flex-col gap-[120px] mt-[60px] lg:px-[165px]">
        {products.map((product, index) => {
          return (
            <div key={index} className="flex flex-col ">
              <div className="flex flex-col gap-[24px] justify-center items-center  lg:flex-row lg:gap-[125px]">
                <img
                  src={handleImage(product)}
                  alt="product"
                  className="lg:w-[50%]"
                />
                <div className="flex flex-col gap-[24px] justify-center items-center lg:w-[50%] lg:items-start">
                  {product.new && (
                    <span className="text-[#D87D4A] text-center text-[14px] font-normal tracking-[10px] uppercase lg:text-start">
                      NEW PRODUCT
                    </span>
                  )}
                  <h2 className="text-[#000] lg:text-start text-center text-[28px] font-bold tracking-[1px] ">
                    {product.name}
                  </h2>

                  <p className="text-[#000]  lg:text-start text-center text-[15px] font-normal leading-[25px] opacity-50">
                    {product.description}
                  </p>
                  <div className="flex self-start">
                    <SeeProduct
                      path={product.slug}
                      key={index}
                      previousRoot={product.category}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
