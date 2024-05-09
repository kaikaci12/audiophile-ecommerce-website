import { useParams } from "react-router";
import data from "../data.json";
import NewProductSpan from "../components/NewProductSpan";
export default function SingleProduct() {
  const singleProduct = useParams();
  console.log(singleProduct);

  return (
    <div>
      {data.map((product, index) => {
        return (
          <div key={index}>
            singleProduct
            <img src={product.image.mobile} alt="" />
          </div>
        );
      })}
    </div>
  );
}
