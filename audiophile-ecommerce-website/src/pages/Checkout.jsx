import React from "react";
import { useEffect, useState } from "react";

import GoBack from "../components/GoBack";
export default function Checkout({ cartItems }) {
  const [eMoney, setEmoney] = useState(false);
  const [cash, setCash] = useState(false);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  if (cartItems.length === 0) {
    return (
      <div className="text-[50px] w-full">
        <GoBack />
        Something went wrong
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA]  px-[24px] lg:p-[165px] lg:flex lg:gap-[30px]  lg:justify-center   ">
      <div className="bg-white  p-[24px] rounded-[8px] lg:w-[60%]">
        <div className="flex flex-col gap-[32px] ">
          <h2 className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase">
            CHECKOUT
          </h2>
          <span className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px]">
            Billing details
          </span>
          <form className="flex   gap-[40px] mt-[16px] flex-col ">
            <div className="flex flex-col sm:flex-row sm:gap-[30px] gap-[40px]">
              <label className="text-[#000] sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
                Name
                <input
                  type="text"
                  className="h-[56px]  rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
                />
              </label>
              <label className="text-[#000] sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
                Email Address
                <input
                  type="text"
                  className="h-[56px]  rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
                />
              </label>
            </div>

            <label className="text-[#000] sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              Phone Number
              <input
                type="text"
                className="h-[56px]  rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
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
            <div className="flex flex-col sm:flex-row sm:gap-[30px] gap-[40px]">
              <label className="text-[#000] sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
                ZIP Code
                <input
                  type="text"
                  className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
                />
              </label>
              <label className="text-[#000] sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
                City
                <input
                  type="text"
                  className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
                />
              </label>
            </div>

            <label className="text-[#000] sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              Country
              <input
                type="text"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
          </form>
          <form className="flex flex-col gap-[16px] sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-[16px]">
              <span className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] uppercase">
                payment details
              </span>
              <span className="text-[#000] text-[12px] font-bold tracking-[-0.214px]">
                Payment Method
              </span>
            </div>
            <div className="flex flex-col gap-[16px] sm:w-[50%]">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setEmoney(!eMoney);
                  if (cash) {
                    setCash(false);
                  }
                }}
                className={`h-[56px] flex  items-center  justify-start px-[21px] py-[18px] rounded-[8px] border-[1px]  border-[solid]  ${
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
            </div>
          </form>
          <div className="sm:flex sm:gap-[30px]">
            <label className="text-[#000] text-[12px] sm:w-[50%] font-bold tracking-[-0.214px] flex flex-col gap-[9px]">
              e-Money Number
              <input
                type="number"
                className="h-[56px] rounded-[8px] border-[1px]  border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
            <label className="text-[#000] text-[12px] font-bold sm:w-[50%] tracking-[-0.214px] flex flex-col gap-[9px]">
              e-Money PIN
              <input
                type="number"
                className="h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40"
              />
            </label>
          </div>
        </div>
      </div>
      <div className=" mt-[32px] p-[24px] lg:w-[40%] rounded-[8px] lg:mt-[0] w-auto bg-white h-fit">
        <h2 className="text-[#000] text-[18px] font-bold tracking-[1.286px] uppercase mb-[30px]">
          summary
        </h2>

        {cartItems.map((item, index) => {
          return (
            <div key={index} className="">
              {item.quantity >= 1 && cartItems.length >= 1 && (
                <div className="h-[64px] flex gap-[20px] items-center  justify-between">
                  <div className="flex gap-[16px]">
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
                  <span className="text-[#000] text-right text-[15px] font-bold leading-[25px] opacity-50">{`x${item.quantity}`}</span>
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
        <div className="flex flex-col gap-[8px] mt-[32px]">
          <div className="w-full flex  justify-between">
            <span className="text-[#000] font-[Manrope] text-[15px] font-normal leading-[25px] uppercase opacity-50">
              total
            </span>
            <span className="text-[#000] text-center text-[18px] font-bold uppercase">
              {`$${totalPrice}`}
            </span>
          </div>
          <div className="w-full flex  justify-between">
            <span className="text-[#000] font-[Manrope] text-[15px] font-normal leading-[25px] uppercase opacity-50">
              SHIPPING
            </span>
            <span className="text-[#000] text-center text-[18px] font-bold uppercase">
              $0.50
            </span>
          </div>
          <div className="w-full flex  justify-between">
            <span className="text-[#000] font-[Manrope] text-[15px] font-normal leading-[25px] uppercase opacity-50">
              VAT (INCLUDED)
            </span>
            <span className="text-[#000] text-center text-[18px] font-bold uppercase">
              {`$${totalPrice / 5}`}
            </span>
          </div>
          <div className="w-full flex  justify-between mt-[16px]">
            <span className="text-[#000] font-[Manrope] text-[15px] font-normal leading-[25px] uppercase opacity-50">
              GRAND TOTAL
            </span>
            <span className="text-[#D87D4A] text-center text-[18px] font-bold uppercase">
              {`$${totalPrice + 50}`}
            </span>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mt-[32px]">
          <button className="h-[48px] bg-[#D87D4A] px-[55px] py-[15px] text-[#FFF] w-full text-center text-[13px] font-bold tracking-[1px] uppercase">
            CONTINUE & PAY
          </button>
        </div>
      </div>
      <div className="fixed w-full h-full bg-[#000]  bg-opacity-40 flex items-center justify-center z-[999]">
        <div className="bg-white w-full h-[600px] p-[32px] flex flex-col rounded-[8px] ">
          <div className="flex flex-col gap-[16px] ">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#D87D4A" />
              </svg>
              <svg
                className="absolute  left-[50px]"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="21"
                viewBox="0 0 26 21"
                fill="none"
              >
                <path
                  d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <h2 className="text-[#000] text-[24px] font-bold leading-[28px] tracking-[0.857px] uppercase">
              THANK YOU FOR YOUR ORDER
            </h2>
            <p className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
              You will receive an email confirmation shortly.
            </p>
          </div>
          <div>
            <div className="h-[232px] rounded-[8px] bg-[#F1F1F1] px-[24px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
