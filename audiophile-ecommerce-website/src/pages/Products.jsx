import React, { useEffect } from "react";
import data from "../data.json";
import { useParams } from "react-router";
import NewProductSpan from "../components/NewProductSpan";
import SeeProduct from "../components/Directors/Button";

import { ProductImages } from "./imageData";

export default function Products() {
  const params = useParams();
  const products = data.filter(
    (productObj) => productObj.category === params.products
  );
  console.log(params);
  console.log(ProductImages);

  return (
    <div>
      <div className="h-[100px] bg-black uppercase text-white flex justify-center items-center">
        <h2 className="text-center text-[#FFF]  text-[28px] font-bold leading-[normal] tracking-[2px] uppercase">
          {params.products}
        </h2>
        <NewProductSpan
          className={
            "text-[#D87D4A]  absolute opacity-1 left-2/4 -translate-x-[50%-50%]"
          }
        />
      </div>
      <div className="px-[24px]">
        {products.map((product, index) => {
          const { mobile } = ProductImages[index];
          return (
            <div key={index} className="flex flex-col gap-[120px] mt-[64px]">
              <div className="flex flex-col gap-[24px] justify-center items-center">
                <h2 className="text-[#000] text-center text-[28px] font-bold tracking-[1px]">
                  {product.name}
                </h2>
                <img
                  src={`.${mobile}`} // Using the mobile image URL
                  alt="product"
                />
                <p className="text-[#000] text-center text-[15px] font-normal leading-[25px] opacity-50">
                  {product.description}
                </p>
                <SeeProduct path={product.slug} key={index} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
