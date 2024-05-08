import React from "react";

export default function NewProductSpan({ className }) {
  return (
    <div>
      <span
        className={`text-[#FFF] text-center text-[14px] ${className} tracking-[10px] opacity-50 mt-[108px]`}
      >
        NEW PRODUCT
      </span>
    </div>
  );
}
