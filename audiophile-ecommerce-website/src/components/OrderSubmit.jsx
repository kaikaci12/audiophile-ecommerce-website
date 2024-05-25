import React, { useState } from "react";
import Complete from "/assets/complete.svg";
import { Link } from "react-router-dom";
export default function OrderSubmit({ cartItems, handleRemoveAll }) {
  const [visible, setVisible] = useState(1);

  function viewOthers() {
    setVisible(cartItems.length);
  }
  function viewLess() {
    setVisible(1);
  }
  return (
    <div className="">
      <div className="fixed  w-full overflow-y-hidden h-full sm:px-[114px] bg-[#000] px-[24px]    bg-opacity-40 flex items-center justify-center z-[999]">
        <div className="bg-white lg:w-[540px]  h-fit   z-[999] w-full sm:p-[48px]  p-[32px] flex flex-col rounded-[8px] ">
          <div className="flex flex-col gap-[16px] ">
            <div className="flex items-center ">
              <img src={Complete} alt="" />
            </div>
            <h2 className="text-[#000] text-[24px] font-bold leading-[28px] tracking-[0.857px] uppercase">
              THANK YOU FOR YOUR ORDER
            </h2>
            <p className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
              You will receive an email confirmation shortly.
            </p>
          </div>
          <div className="">
            <div className="sm:flex sm:w-ful  h-full   sm:items-center   sm:justify-center sm:mt-[33px]">
              <div className=" flex flex-col gap-[10px]  sm:w-[60%]   sm:rounded-[8px]  rounded-[8px] bg-[#F1F1F1] px-[24px] py-[24px] mt-[24px]">
                {cartItems.slice(0, visible).map((item, index) => {
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
                <div className="h-[1px] w-full bg-[#000] opacity-[0.08]"></div>
                <div
                  onClick={visible > 1 ? viewLess : viewOthers}
                  className="w-full flex justify-center mt-[12px]"
                >
                  {cartItems.length > 1 && (
                    <span className="text-[#000] text-center  text-[12px] font-bold tracking-[-0.214px] opacity-50">
                      {visible > 1 ? (
                        "View Less"
                      ) : (
                        <>
                          and {cartItems.slice(0, cartItems.length - 1).length}{" "}
                          other item(s)
                        </>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div className="  sm:w-[40%]   sm:rounded-tl-none rounded-br-[8px] sm:rounded-tr-[8px] sm:rounded-bl-none  rounded-tl-none sm:rounded-br-[8px] rounded-tr-none rounded-bl-[8px] bg-[#000] flex flex-col gap-[8px] px-[24px] py-[16px]">
                <span className="text-[#FFF] text-[15px] font-normal leading-[25px] opacity-50">
                  GRAND TOTAL
                </span>
                <span className="text-[#FFF] text-[18px] font-bold uppercase">
                  $ 5,446
                </span>
              </div>
            </div>
            <Link to="/" onClick={() => handleRemoveAll()}>
              <button className="text-[#FFF] mt-[24px] text-center sm:mt-[60px] text-[13px] font-bold tracking-[1px] uppercase h-[48px] bg-[#D87D4A] flex items-center justify-center py-[15px] w-full">
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
