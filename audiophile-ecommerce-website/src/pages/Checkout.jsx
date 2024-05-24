import React from "react";
import { useEffect, useState } from "react";
import GoBack from "../components/GoBack";
export default function Checkout({ cartItems }) {
  const [eMoney, setEmoney] = useState(false);
  const [cash, setCash] = useState(false);

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
              onClick={(e) => {
                e.preventDefault();
                setEmoney(!eMoney);
                if (cash) {
                  setCash(false);
                }
              }}
              className={`h-[56px] flex  items-center justify-start px-[21px] py-[18px] rounded-[8px] border-[1px]  border-[solid]  ${
                eMoney ? "border-[#D87D4A]" : "border-[#CFCFCF]"
              }   text-[14px] font-bold tracking-[-0.25px] `}
            >
              <button className="flex gap-[16px] z-[999]  items-center text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-100">
                <div className="w-[20px] h-[20px] stroke-[1px]  stroke-[#CFCFCF] flex justify-center items-center border-[1px] border-[solid] border-[#CFCFCF] rounded-full">
                  {eMoney && (
                    <div className="w-[10px] h-[10px]  bg-[#D87D4A] rounded-md"></div>
                  )}
                </div>
                e-Money
              </button>
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                setCash(!cash);
                if (eMoney) {
                  setEmoney(false);
                }
              }}
              className={`h-[56px] flex  items-center justify-start px-[21px] py-[18px] rounded-[8px] border-[1px]  border-[solid]  ${
                cash ? "border-[#D87D4A]" : "border-[#CFCFCF]"
              }   text-[14px] font-bold tracking-[-0.25px] `}
            >
              <button className="flex gap-[16px] z-[999]  items-center text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-100">
                <div className="w-[20px] h-[20px] stroke-[1px]  stroke-[#CFCFCF] flex justify-center items-center border-[1px] border-[solid] border-[#CFCFCF] rounded-full">
                  {cash && (
                    <div className="w-[10px] h-[10px]  bg-[#D87D4A] rounded-md"></div>
                  )}
                </div>
                Cash on Delivery
              </button>
            </div>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              e-Money Number
              <input
                type="number"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
            <label className="text-[#000] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              e-Money PIN
              <input
                type="number"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
          </form>
        </div>
      </div>
      <div className="bg-white mt-[32px] p-[24px]">
        <h2 className="text-[#000] text-[18px] font-bold tracking-[1.286px] uppercase">
          summary
        </h2>
        {cartItems.map((item, index) => {
          return (
            <div key={index} className="w-full">
              {item.quantity >= 1 && cartItems.length >= 1 && (
                <div className="h-[64px] flex gap-[20px] items-center justify-between">
                  <img
                    src={item.image.mobile}
                    alt="cartitem"
                    className="w-[64px] h-[64px] rounded-[8px] bg-[#F1F1F1]"
                  />
                  <div className="flex flex-col gap-[0px]">
                    <span className="text-[#000] text-[15px] font-bold leading-[25px] inline-flex">
                      {item.name}
                    </span>
                    <span className="text-[#000] text-[14px] font-bold leading-[25px] inline-flex opacity-50">
                      {`$${item.price * item.quantity}`}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {cartItems.length === 0 && (
          <h3 className="text-black font-bold text-[30px] uppercase">
            no Items Added
          </h3>
        )}
      </div>
      <div className="w-full flex justify-between">
        <span className="text-[#000] font-[Manrope] text-[15px] font-normal leading-[25px] uppercase opacity-50">
          total
        </span>
        <span className="text-[#000] text-center text-[18px] font-bold uppercase">
          {`$${totalPrice}`}
        </span>
      </div>
    </div>
  );
}
