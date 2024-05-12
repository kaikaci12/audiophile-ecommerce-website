import data from "../data.json";
import { useParams } from "react-router";
import NewProductSpan from "../components/NewProductSpan";
import SeeProduct from "../components/Directors/Button";
import { useState } from "react";
import ProductImage from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
export default function Products() {
  const params = useParams();
  const products = data.filter(
    (productObj) => productObj.category === params.products
  );

  console.log(params);
  const [images, SetImages] = useState("");

  return (
    <div>
      <div className="h-[100px] bg-black uppercase text-white flex justify-center items-center">
        <h2 className="text-center text-[#FFF]  text-[28px] font-bold leading-[normal] tracking-[2px] uppercase">
          {params.products}
        </h2>
        <NewProductSpan
          className={
            "text-orange-600  opacity-100 w-full  flex absolute top-[60%] left-[30%] right-[30%]  text-center text-[14px] font-normal tracking-[10px] uppercase"
          }
        />
      </div>
      <div className="px-[24px]">
        {products.map((product, index) => {
          return (
            <div key={index} className="flex flex-col gap-[120px] mt-[64px]">
              <div className="flex flex-col gap-[24px] justify-center items-center">
                <h2 className="text-[#000] text-center text-[28px] font-bold tracking-[1px] mt-[20%] ">
                  {product.name}
                </h2>

                <img src={images} alt="product" />
                <p className="text-[#000] text-center text-[15px] font-normal leading-[25px] opacity-50">
                  {product.description}
                </p>
                <SeeProduct
                  path={product.slug}
                  key={index}
                  previousRoot={product.category}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
