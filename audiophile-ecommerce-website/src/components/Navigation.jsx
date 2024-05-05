export default function Navigation() {
  return (
    <div>
      <ul className={`flex  flex-col gap-[16px] ${className} `}>
        <li className="text-[#FFF] text-[13px] font-bold leading-[25px]">
          Home
        </li>
        <li className="text-[#FFF] text-[13px] font-bold leading-[25px]">
          HEADPHONES
        </li>
        <li className="text-[#FFF] text-[13px] font-bold leading-[25px]">
          SPEAKERS
        </li>
        <li className="text-[#FFF] text-[13px] font-bold leading-[25px]">
          EARPHONES
        </li>
      </ul>
    </div>
  );
}
