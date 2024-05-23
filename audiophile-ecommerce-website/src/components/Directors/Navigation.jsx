import { Link } from "react-router-dom";
import NavData from "../../navData.json";
import { useState, useEffect } from "react";
export default function Navigation({ className }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate an effect like component mount or some trigger to show the header
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`relative z-40    ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } duration-500 ease-in-out`}
    >
      <nav className="">
        <ul
          className={`flex flex-col gap-[30px] items-start justify-center ${className} lg:flex-row`}
        >
          <li className="text-white font-bold leading-[25px] no-underline uppercase cursor-pointer hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          {NavData.map((product, index) => (
            <li key={index}>
              <Link
                to={`${product.category}`}
                className="text-white font-bold uppercase cursor-pointer w-full hover:text-orange-500"
              >
                {product.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
