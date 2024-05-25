import React from "react";
import { useEffect, useState } from "react";

import GoBack from "../components/GoBack";
import OrderSubmit from "../components/OrderSubmit";
export default function Checkout({ cartItems, handleRemoveAll }) {
  const [eMoney, setEmoney] = useState(false);
  const [cash, setCash] = useState(false);
  const [order, setOrder] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [moneyNum, setMoneyNum] = useState("");
  const [pin, setPin] = useState("");
  function isValid(name, address, zip, city, country, email, moneyNum, pin) {
    if (
      name === "" ||
      address === "" ||
      zip === "" ||
      city === "" ||
      country === "" ||
      moneyNum === "" ||
      pin === "" ||
      !email.includes("@") ||
      email === "" ||
      !email.includes(".")
    ) {
      return false;
    }
    return true;
  }
  function handleSubmit() {
    if (isValid(name, address, zip, city, country, email, moneyNum, pin)) {
      setOrder(true);
    } else {
      setInputError(true);
      setError(true);
    }
  }
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
  const lastProduct = cartItems[cartItems.length - 1];
  console.log(lastProduct);
  return (
    <div className="">
      <div className="absolute left-[100px] top-[160px] ">
        <GoBack path={`${lastProduct.category}/${lastProduct.slug}`} />
      </div>
      {order && (
        <OrderSubmit cartItems={cartItems} handleRemoveAll={handleRemoveAll} />
      )}
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
                <label
                  className={`text-[#000] ${
                    inputError && "text-red-700 "
                  } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
                >
                  Name
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    className={`h-[56px] ${
                      inputError && "border-[#CD2C2C]"
                    } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                  />
                </label>
                <label
                  className={`text-[#000] ${
                    error && "text-red-700 "
                  } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
                >
                  <div className="flex justify-between">
                    <span>Email Address</span>
                    {error && (
                      <span className="text-red-700 text-[12px] font-bold tracking-[-0.214px]">
                        Wrong format
                      </span>
                    )}
                  </div>

                  <input
                    className={`h-[56px] ${
                      inputError && "border-[#CD2C2C]"
                    } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </label>
              </div>

              <label
                className={`text-[#000] ${
                  error && "text-red-700 "
                } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
              >
                Phone Number
                <input
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  type="text"
                  className={`h-[56px] ${
                    error && "border-[#CD2C2C]"
                  } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                />
              </label>
            </form>
            <form className="flex flex-col gap-[40px]">
              <span className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] uppercase">
                shipping info
              </span>
              <label
                className={`text-[#000] ${
                  error && "text-red-700 "
                } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
              >
                Your Address
                <input
                  onChange={(e) => {
                    setAdress(e.target.value);
                  }}
                  type="text"
                  className={`h-[56px] ${
                    error && "border-[#CD2C2C]"
                  } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                />
              </label>
              <div className="flex flex-col sm:flex-row sm:gap-[30px] gap-[40px]">
                <label
                  className={`text-[#000] ${
                    error && "text-red-700 "
                  } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
                >
                  ZIP Code
                  <input
                    type="text"
                    onChange={(e) => {
                      setZip(e.target.value);
                    }}
                    className={`h-[56px] ${
                      error && "border-[#CD2C2C]"
                    } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                  />
                </label>
                <label
                  className={`text-[#000] ${
                    error && "text-red-700 "
                  } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
                >
                  City
                  <input
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    type="text"
                    className={`h-[56px] ${
                      error && "border-[#CD2C2C]"
                    } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                  />
                </label>
              </div>

              <label
                className={`text-[#000] ${
                  error && "text-red-700 "
                } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
              >
                Country
                <input
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  type="text"
                  className={`h-[56px] ${
                    error && "border-[#CD2C2C]"
                  } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
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
            {eMoney && (
              <div className="sm:flex sm:gap-[30px]">
                <label
                  className={`text-[#000] ${
                    error && "text-red-700 "
                  } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
                >
                  e-Money Number
                  <input
                    onChange={(e) => setMoneyNum(e.target.value)}
                    type="number"
                    className={`h-[56px] ${
                      error && "border-[#CD2C2C]"
                    } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                  />
                </label>
                <label
                  className={`text-[#000] ${
                    error && "text-red-700 "
                  } sm:w-[50%] text-[12px] font-bold tracking-[-0.214px] flex flex-col gap-[9px]`}
                >
                  e-Money PIN
                  <input
                    onChange={(e) => setPin(e.target.value)}
                    type="number"
                    className={`h-[56px] ${
                      error && "border-[#CD2C2C]"
                    } px-[16px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[#000] text-[14px] font-bold tracking-[-0.25px] opacity-40`}
                  />
                </label>
              </div>
            )}
          </div>
          <div className="flex gap-[32px] mt-[30px] items-center">
            <svg
              className="w-[48px] h-[48px]"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                fill="#D87D4A"
              />
            </svg>
            <p className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
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
          <div
            onClick={() => {
              handleSubmit();
            }}
            className="flex w-full justify-center items-center mt-[32px]"
          >
            <button className="h-[48px] bg-[#D87D4A] px-[55px] py-[15px] text-[#FFF] w-full text-center text-[13px] font-bold tracking-[1px] uppercase">
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
