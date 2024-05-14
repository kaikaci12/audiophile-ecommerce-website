import { useParams } from "react-router";
import data from "../data.json";

import NewProductSpan from "../components/NewProductSpan";
import AddToCart from "../components/AddToCart";
import Gallery from "../components/Gallery";
import ProductImages from "./imageData";
import SeeProduct from "../components/Directors/Button";
import GoBack from "../components/GoBack";
import { useState } from "react";
export default function SingleProduct({ handleAddProduct }) {
  const singleProduct = useParams();
  console.log(singleProduct);
  const singleData = data.filter((productObj) => {
    return (
      productObj.slug === singleProduct.slug &&
      productObj.category === singleProduct.products
    );
  });

  return (
    <div className="px-[24px]">
      <GoBack path={singleProduct?.products} />;
      {singleData.map((product, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col gap-[24px]">
              {product.new && (
                <NewProductSpan
                  className={"text-[#D87D4A]  absolute opacity-1 "}
                />
              )}
              <h2 className="text-[#000] text-left text-[28px] font-bold tracking-[1px]">
                {product.name}
              </h2>
              <img src={product.image.mobile} alt="" />
              <p className="text-[#000] text-left text-[15px] font-normal leading-[25px] opacity-50">
                {product.description}
              </p>
              <span className="text-[#000] text-[18px] font-bold tracking-[1.286px] uppercase">{`$${product.price}`}</span>
              <div className="flex gap-[16px] w-full">
                <button className="text-[#000] text-center text-[13px] font-bold tracking-[1px] h-[48px] bg-[#F1F1F1] px-[50px] py-[15px] ">
                  1
                </button>
                <div onClick={handleAddProduct(product)}>
                  <AddToCart />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] mt-[40%]">
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
            <div className="flex flex-col gap-[24px] mt-[30%]">
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
            <div className="flex flex-col gap-[20px] w-full justify-center items-center mt-[20%]">
              <img src={product.gallery.first.mobile} alt="product" />
              <img src={product.gallery.second.mobile} alt="product" />
              <img src={product.gallery.third.mobile} alt="product" />
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
