import { useState } from "react";
import Navigation from "./Directors/Navigation";
import BurgerMenu from "./Directors/BurgerMenu";
import AudiophileLogo from "./Directors/Audiophile";
import ShoppingCart from "./Directors/ShoppingCart";
import CartStorage from "./CartStorage";
export default function Header({
  cartItems,

  cartActive,
  handleCartActive,
}) {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="bg-neutral-950 flex justify-between  h-[89px] items-center px-[24px]">
      <div onClick={() => setNavActive(!navActive)}>
        <BurgerMenu />
      </div>
      {navActive ? (
        <div className="absolute top-[100px]">
          <Navigation
            className={
              "bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm pointer-events-auto w-[400px] h-[300px] px-[30px] py-[20px] transition-transform transform"
            }
          />
          ;
        </div>
      ) : null}
      <AudiophileLogo />
      <div
        onClick={() => handleCartActive(cartActive)}
        className="cursor-pointer"
      >
        <ShoppingCart cartItems={cartItems} />
      </div>
    </header>
  );
}
