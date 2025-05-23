import TextBalloon1 from "../../components/TextBalloon1";
import characterLogo from "../../assets/characterLogo.svg";
import { Link } from "react-router-dom";

export default function CropConfirm() {
  return (
    <div className="flex flex-col items-center py-7 px-10 h-full justify-between">
      <div className="w-full h-[10rem] md:h-[15rem] bg-gray-500"></div>
      <div className="flex flex-col w-full mt-3 space-y-3">
        <div className="space-y-2">
          <label className="font-semibold text-sm sm:text-md md:text-lg">
            작물명
          </label>
          <div className="border-none h-7 sm:h-9 md:h-11 w-full rounded-full pl-4 flex items-center bg-red-500">
            농작물
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-semibold text-sm sm:text-md md:text-lg">
            작물 유형
          </label>
          <div className="border-none h-7 sm:h-9 md:h-11 w-full rounded-full pl-4 flex items-center bg-red-500">
            유형1
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <TextBalloon1 text="작물을 확인해주세요!" />
        <img src={characterLogo} className="w-32 h-32 sm:w-48 sm:h-48 " />
      </div>
      <div className="flex w-full space-x-3">
        <Link
          className="bg-red-500 h-9 sm:h-9 md:h-11 w-full rounded-full font-bold text-lg flex items-center justify-center"
          to="/select/crop"
        >
          아니요
        </Link>
        <Link
          className="bg-red-500 h-9 sm:h-9 md:h-11 w-full rounded-full font-bold text-lg flex items-center justify-center"
          to="/select/bug"
        >
          맞아요
        </Link>
      </div>
    </div>
  );
}
