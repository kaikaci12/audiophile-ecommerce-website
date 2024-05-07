export default function Navigation({ className }) {
  return (
    <div className={`${className}`}>
      <ul className={`flex  flex-col gap-[16px]  z-[999] `}>
        <li className=" text-[#FFF]  font-bold leading-[25px] no-underline">
          Home
        </li>
        <li className="no-underline text-[#FFF]  font-bold leading-[25px]">
          HEADPHONES
        </li>
        <li className=" no-underline text-[#FFF] font-bold leading-[25px]">
          SPEAKERS
        </li>
        <li className="no-underline text-[#FFF]  font-bold leading-[25px]">
          EARPHONES
        </li>
      </ul>
    </div>
  );
}
