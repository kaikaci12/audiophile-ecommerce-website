import YX1 from "../assets/YX1.png";
import Button from "./Directors/Button";
export default function YX1Earphones() {
  return (
    <div className="flex flex-col gap-[24px] items-start justify-start">
      <img src={YX1} alt="product" className="w-full " />
      <div className="h-[200px] w-full rounded-[8px] bg-[#F1F1F1] flex flex-col items-start justify-center gap-[32px] px-[24px]">
        <h2 className="text-[#000] text-[28px] font-bold tracking-[2px]">
          YX1 EARPHONES
        </h2>
        <Button
          className={
            "border-[1px] border-[solid] border-[#000] bg-transparent text-[black]"
          }
        />
      </div>
    </div>
  );
}
