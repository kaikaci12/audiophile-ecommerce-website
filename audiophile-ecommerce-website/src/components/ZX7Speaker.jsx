import ZX7 from "../assets/ZX7.png";
import Button from "./Button";
function ZX7Speaker() {
  return (
    <div className="w-full h-[320px] rounded-[8px] bg-[#F1F1F1] flex flex-col justify-center items-center ">
      <div>
        <h2 className="text-[#000] text-[28px] font-bold tracking-[2px]">
          ZX7 SPEAKER
        </h2>
        <Button
          className={
            "border-[1px] border-[solid] border-[#000] bg-transparent text-[black]"
          }
        />
        <img src={ZX7} alt="" className="absolute " />
      </div>
    </div>
  );
}
export default ZX7Speaker;
