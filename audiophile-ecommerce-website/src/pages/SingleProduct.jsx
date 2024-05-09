import { useParams } from "react-router";
import data from "../data.json";
import NewProductSpan from "../components/NewProductSpan";
import AddToCart from "../components/AddToCart";
export default function SingleProduct() {
  const singleProduct = useParams();
  console.log(singleProduct);
  const singleData = data.filter((productObj) => {
    return productObj.slug === singleProduct.slug;
  });
  console.log(singleData);

  return (
    <div>
      {singleData.map((product, index) => {
        return (
          <div key={index}>
            <img src={product.image.mobile} alt="" />
            <div className="flex flex-col gap-[24px]">
              {product.new ? <NewProductSpan /> : null}
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
                <AddToCart />
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
            <div>
              <h2 className="text-[#000] text-left text-[28px] font-bold tracking-[1px] ">
                in the box
              </h2>
              <div>
                <ul>
                  <li>{`${product.includes[0].quantity}X ${product.includes[0].item}`}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
