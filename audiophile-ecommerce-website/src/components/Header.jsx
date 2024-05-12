import { useState } from "react";
import Navigation from "./Directors/Navigation";
import BurgerMenu from "./Directors/BurgerMenu";
import AudiophileLogo from "./Directors/Audiophile";
import ShoppingCart from "./Directors/ShoppingCart";

export default function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="bg-neutral-950 flex justify-between  h-[89px] items-center px-[24px]">
      <div onClick={() => setNavActive(!navActive)}>
        <BurgerMenu />
      </div>
      {navActive ? (
        <div className="absolute top-[100px]">
          <Navigation />;
        </div>
      ) : null}
      <AudiophileLogo />
      <ShoppingCart />
    </header>
  );
}
