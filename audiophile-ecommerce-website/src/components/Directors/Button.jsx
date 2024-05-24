import { Link, useActionData } from "react-router-dom";
import data from "../../data.json";
import { useState } from "react";

function SeeProduct({ className, path, previousRoot }) {
  return (
    <div>
      <Link to={`/${previousRoot}/${path}`}>
        <button
          className={`text-[#FFF] text-[13px] ${className} font-bold leading-[normal] tracking-[1px] bg-[#D87D4A;] px-[30px] py-[15px] mt-[14px] w-100%`}
        >
          See Product
        </button>
      </Link>
    </div>
  );
}

export default SeeProduct;
