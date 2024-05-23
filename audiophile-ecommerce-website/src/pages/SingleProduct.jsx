import { useParams } from "react-router";
import data from "../data.json";

import NewProductSpan from "../components/NewProductSpan";
import AddToCart from "../components/AddToCart";
import Gallery from "../components/Gallery";
import ProductImages from "./imageData";
import SeeProduct from "../components/Directors/Button";
import GoBack from "../components/GoBack";
import { useState, useEffect } from "react";
export default function SingleProduct({ handleAddProduct }) {
  const singleProduct = useParams();

  const singleData = data.filter((productObj) => {
    return (
      productObj.slug === singleProduct.slug &&
      productObj.category === singleProduct.products
    );
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleImage(product) {
    if (windowWidth < 640) {
      return product.image.mobile;
    }
    if (windowWidth < 1024 && windowWidth > 500) {
      return product.image.tablet;
    } else {
      return product.image.desktop;
    }
  }

  function handleGallery1(product) {
    if (windowWidth < 640) {
      return product.gallery.first.mobile;
    }
    if (windowWidth < 1024 && windowWidth > 500) {
      return product.gallery.first.tablet;
    } else {
      return product.gallery.first.desktop;
    }
  }
  function handleGallery2(product) {
    if (windowWidth < 640) {
      return product.gallery.second.mobile;
    }
    if (windowWidth < 1024 && windowWidth > 500) {
      return product.gallery.second.tablet;
    } else {
      return product.gallery.second.desktop;
    }
  }
  function handleGallery3(product) {
    if (windowWidth < 640) {
      return product.gallery.third.mobile;
    }
    if (windowWidth < 1024 && windowWidth > 500) {
      return product.gallery.third.tablet;
    } else {
      return product.gallery.third.desktop;
    }
  }

  return (
    <div className="px-[24px] lg:px-[125px]">
      <GoBack path={singleProduct?.products} />;
      {singleData.map((product, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col gap-[24px] sm:flex-row sm:gap-[70px] items-center">
              <img
                src={handleImage(product)}
                alt="product"
                className="sm:min-w-[281px] lg:w-[50%]"
              />
              <div className="flex flex-col gap-[24px] sm:gap-[32px] lg:w-[50%]">
                {product.new && (
                  <NewProductSpan
                    className={"text-[#D87D4A]  absolute opacity-1 "}
                  />
                )}
                <h2 className="text-[#000] text-left text-[28px] font-bold tracking-[1px]">
                  {product.name}
                </h2>

                <p className="text-[#000] text-left text-[15px] font-normal leading-[25px] opacity-50">
                  {product.description}
                </p>
                <span className="text-[#000] text-[18px] font-bold tracking-[1.286px] uppercase">{`$${product.price}`}</span>
                <div className="flex gap-[16px] w-full">
                  <button className="text-[#000] text-center text-[13px] font-bold tracking-[1px] h-[48px] bg-[#F1F1F1] px-[50px] py-[15px] ">
                    1
                  </button>
                  <div onClick={() => handleAddProduct(product)}>
                    <AddToCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[88px] lg:w-full lg:mt-[160px] sm:mt-[120px]  lg:flex lg:items-center lg:gap-[125px] ">
              <div className="flex flex-col gap-[24px] lg:max-w-[60%]">
                <h2 className="text-[#000] text-left text-[28px] font-bold tracking-[1px] ">
                  FEATURES
                </h2>

                <p className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
                  {product.features.slice(0, 400)}
                </p>
                <p className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
                  {product.features.slice(400, product.features.length - 1)}
                </p>
              </div>
              <div className="flex flex-col   gap-[24px] mt-[88px] sm:flex-row sm:gap-[200px]  sm:mt-[120px] lg:flex-col lg:gap-[32px]">
                <h2 className="text-[#000] text-left text-[28px] font-bold tracking-[1px] uppercase ">
                  in the box
                </h2>

                <ul>
                  {product.includes.map((item, index) => {
                    return (
                      <div className="flex gap-[16px]" key={index}>
                        <li className="text-[#D87D4A] text-[15px] font-bold leading-[25px]">{`${item.quantity}x`}</li>
                        <li className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
                          {item.item}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] sm: w-full justify-center items-center lg:mt-[160px] sm:mt-[120px] mt-[88px] sm:flex-row">
              <div className="flex flex-col gap-[20px] sm:min-w-[270px] lg:min-w-[445px]">
                <img alt="product" src={handleGallery1(product)} />
                <img src={handleGallery2(product)} alt="product" />
              </div>

              <img
                src={handleGallery3(product)}
                alt="product"
                className="sm:min-w-[350px] lg:min-w-[600px]"
              />
            </div>
            <div className="w-full flex flex-col gap-[56px] items-center justify-center">
              <h2 className="text-[#000] text-left text-[28px] font-bold tracking-[1px] mt-[20%] uppercase">
                you may also like
              </h2>
              {product.others.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[40px] ">
                    <img src={item.image.mobile} alt="other products" />
                    <h2 className="text-[#000] text-left text-[22px] font-bold tracking-[1px] uppercase ">
                      {item.name}
                    </h2>
                    <SeeProduct path={item.slug} previousRoot={item.category} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
