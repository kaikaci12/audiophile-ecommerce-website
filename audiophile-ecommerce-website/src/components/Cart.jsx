import React, { useState } from "react";
import data from "../data.json";

export default function Cart() {
  return (
    <div className="h-[488px] rounded-[8px] bg-[#FFF] absolute px-[28px] py-[31px]">
      <div className="flex w-full justify-between">
        <h2 className="text-[#000] text-[18px] font-bold tracking-[1.286px] uppercase">
          Cart()
        </h2>
        <span className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50 underline cursor-pointer">
          Remove all
        </span>
      </div>
      <div>products</div>
      <div className="w-full flex justify-between">
        <span className="text-[#000] font-[Manrope] text-[15px] font-normal leading-[25px] uppercase">
          total
        </span>
        <span className="text-[#000] text-center text-[18px] font-bold uppercase">
          totalPrice
        </span>
      </div>
      <button className="text-[#FFF] text-center text-[13px] font-bold leading-[normal] tracking-[1px] uppercase w-full px-[52px] py-[15px] h-[48px] bg-[#D87D4A] cursor-pointer">
        checkout
      </button>
    </div>
  );
}
