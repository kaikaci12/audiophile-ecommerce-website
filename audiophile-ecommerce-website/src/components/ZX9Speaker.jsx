import SpeakerImage from "/assets/speakers.png";
import SeeProduct from "./Directors/Button";
function ZX9Speaker() {
  const path = "speakers";
  const previousRoot = "zx9-speaker";
  return (
    <div className="w-full h-[600px] rounded-[8px] bg-[#D87D4A] flex flex-col justify-center items-center mt-[120px]">
      <div className="rounded-[320px] border-[1px] border-[solid] border-[#FFF]"></div>
      <div className="rounded-[320px] border-[1px] border-[solid] border-[#FFF]"></div>
      <img
        src={SpeakerImage}
        alt="product"
        className="w-[172.248px] 
          height-[207px]"
      />
      <div className="flex flex-col gap-[24px] mt-[32px] items-center">
        <h2 className="text-[#FFF] text-center text-[36px] font-bold leading-[40px] ">
          ZX9 SPEAKER
        </h2>
        <p className="text-[#FFF] text-center text-[15px] font-normal leading-[25px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProduct
          className={"text-[#FFF] bg-[#000]"}
          path={path}
          previousRoot={previousRoot}
        />
      </div>
    </div>
  );
}
export default ZX9Speaker;
