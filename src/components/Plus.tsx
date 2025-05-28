import { FaPlus } from "react-icons/fa6";

export default function Plus() {
  return (
    <div className="w-[90px] h-[90px] md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#A9C0FF] rounded-full flex items-center justify-center">
        <div className="w-[70px] h-[70px] md:w-[88px] md:h-[88px] bg-[#613EEA] rounded-full flex items-center justify-center">
          <FaPlus className="w-10 h-10 fill-white" />
        </div>
      </div>
    </div>
  );
}
