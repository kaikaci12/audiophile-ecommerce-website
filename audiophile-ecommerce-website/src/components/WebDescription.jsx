import ManWithHeadphones from "./assets/ManWithHeadphones.png";
export default function WebDescription() {
  return (
    <div className="flex flex-col gap-[40px] mt-[96px]">
      <img src={ManWithHeadphones} alt="person" className="w-full " />
      <div className="flex flex-col gap-[32px] items-center justify-center">
        <h2 className="text-[#000] text-[28px]  text-center font-bold tracking-[1px] uppercase inline-block">
          Bringing you the best audio gear
        </h2>
        <p className="text-[#000] text-center text-[15px] font-normal leading-[25px] opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
