import { Link } from "react-router-dom";
import data from "../../data.json";
export default function Navigation({ className }) {
  return (
    <div className={`${className}`}>
      {data.map((product, index) => {
        <li key={index}>
          <Link to={`/${product.}`}>{product.category}</Link>
        </li>;
      })}
      <ul className={`flex  flex-col gap-[16px]  z-[999] `}>
        <li className=" text-[#FFF]  font-bold leading-[25px] no-underline">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="no-underline text-[#FFF]  font-bold leading-[25px]">
          <Link to={`/`}>HEADPHONES</Link>
        </li>
        <li className=" no-underline text-[#FFF] font-bold leading-[25px]">
          <Link to={`/`}>SPEAKERS</Link>
        </li>
        <li className="no-underline text-[#FFF]  font-bold leading-[25px]">
          <Link to={`/`}>EARPHONES</Link>
        </li>
      </ul>
    </div>
  );
}
