import { Link } from "react-router-dom";

export default function GoBack({ path, previousPath }) {
  return (
    <div>
      <button className="text-[#000] font-[Manrope] text-[15px] font-normal leading-[25px] opacity-50 mt-[5%]">
        <Link to={`/${path}`}>Go Back</Link>
      </button>
    </div>
  );
}
