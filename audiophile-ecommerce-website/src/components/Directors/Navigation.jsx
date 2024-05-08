import { Link } from "react-router-dom";
import NavData from "../../navData.json";
export default function Navigation({ className }) {
  return (
    <div className={`relative z-40 ${className}`}>
      <nav>
        <ul className={`flex  flex-col gap-[30px]`}>
          <li className=" text-[#FFF]  font-bold leading-[25px] no-underline uppercase cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          {NavData.map((product, index) => {
            return (
              <li key={index}>
                <Link
                  to={`/${product.category}`}
                  className="text-[#FFF]  font-bold   uppercase cursor-pointer w-full "
                >
                  {product.category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}