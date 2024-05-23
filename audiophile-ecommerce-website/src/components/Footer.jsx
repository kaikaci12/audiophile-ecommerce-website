import AudiophileLogo from "./Directors/Audiophile";
import Navigation from "./Directors/Navigation";
import Contact from "./Directors/Contact";
export default function Footer() {
  return (
    <footer className="w-full h-[654px] lg:px-[165px] sm:h-[400px] lg:h-[365px] sm:py-[50px] bg-[#101010] flex flex-col sm:items-start justify-center items-center mt-[120px] gap-[48px] px-[24px]">
      <div className="lg:flex w-full justify-between">
        <AudiophileLogo />
        <Navigation className={"sm:flex-row"} />
      </div>

      <p className="text-[#FFF] lg:max-w-[500px] sm:text-start text-center text-[15px] font-normal leading-[25px] opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex flex-col gap-[48px] sm:flex-row sm:justify-between w-full items-center ">
        <span className="text-[#FFF] text-center text-[15px] font-normal leading-[25px] opacity-50">
          Copyright 2021. All Rights Reserved
        </span>

        <Contact />
      </div>
    </footer>
  );
}
