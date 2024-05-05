import AudiophileLogo from "./Directors/Audiophile";
import Navigation from "./Navigation";
function Footer() {
  return (
    <div className="w-full h-[654px] bg-[#101010] flex flex-col justify-center items-center mt-[120px] gap-[48px] px-[24px]">
      <AudiophileLogo />

      <Navigation />
      <p className="text-[#FFF] text-center text-[15px] font-normal leading-[25px]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <span>Copyright 2021. All Rights Reserved</span>
    </div>
  );
}
