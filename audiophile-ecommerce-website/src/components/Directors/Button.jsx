import { Link, useActionData } from "react-router-dom";
import data from "../../data.json";
import { useState } from "react";

function SeeProduct({ className, path }) {
  return (
    <div>
      <button
        className={`text-[#FFF] text-[13px] ${className} font-bold leading-[normal] tracking-[1px] bg-[#D87D4A;] px-[30px] py-[15px] mt-[14px] w-100%`}
      >
        <Link to={`/:products/${path}`}>See Product</Link>
      </button>
    </div>
  );
}

export default SeeProduct;
