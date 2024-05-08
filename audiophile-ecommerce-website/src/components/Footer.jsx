import AudiophileLogo from "./Directors/Audiophile";
import Navigation from "./Directors/Navigation";
import Contact from "./Directors/Contact";
export default function Footer() {
  return (
    <div className="w-full h-[654px] bg-[#101010] flex flex-col justify-center items-center mt-[120px] gap-[48px] px-[24px]">
      <AudiophileLogo />
      <Navigation className={""} />
      <p className="text-[#FFF] text-center text-[15px] font-normal leading-[25px] opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <span className="text-[#FFF] text-center text-[15px] font-normal leading-[25px] opacity-50">
        Copyright 2021. All Rights Reserved
      </span>
      <Contact />
    </div>
  );
}
