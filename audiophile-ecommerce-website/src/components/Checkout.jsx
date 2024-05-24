import React from "react";
import { useEffect, useState } from "react";
import GoBack from "./GoBack";
export default function Checkout() {
  const [eMoney, setEmoney] = useState(false);

  return (
    <div className="bg-[#FAFAFA] px-[24px]">
      <GoBack />
      <div className="bg-white mt-[65px] p-[24px]">
        <div className="flex flex-col gap-[32px] ">
          <h2 className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase">
            CHECKOUT
          </h2>
          <span className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px]">
            Billing details
          </span>
          <form className="flex flex-col gap-[40px] mt-[16px]">
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              Name
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              Email Address
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              Phone Number
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
          </form>
          <form className="flex flex-col gap-[40px]">
            <span className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] uppercase">
              shipping info
            </span>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              Your Address
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              ZIP Code
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              City
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              Country
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
          </form>
          <form className="flex flex-col gap-[16px]">
            <span className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] uppercase">
              payment details
            </span>
            <div
              className={`h-[56px] flex  items-center justify-start px-[21px] py-[18px] rounded-[8px] border-[1px]  border-[solid]  ${
                eMoney ? "border-[#D87D4A]" : "border-[#CFCFCF]"
              }   text-[14px] font-bold tracking-[-0.25px] `}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setEmoney(!eMoney);
                }}
                className="flex gap-[16px] z-[999]  items-center text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-100"
              >
                <div className="w-[20px] h-[20px] stroke-[1px]  stroke-[#CFCFCF] flex justify-center items-center border-[1px] border-[solid] border-[#CFCFCF] rounded-full">
                  {eMoney && (
                    <div className="w-[10px] h-[10px]  bg-[#D87D4A] rounded-md"></div>
                  )}
                </div>
                e-Money
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
