import { FaPlus } from "react-icons/fa6";

export default function Plus() {
  return (
    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2">
      <div className="w-[100px] h-[100px] bg-[#A9C0FF] rounded-full flex items-center justify-center">
        <div className="w-[88px] h-[88px] bg-[#613EEA] rounded-full flex items-center justify-center">
          <FaPlus className="w-10 h-10 fill-white" />
        </div>
      </div>
    </div>
  );
}
