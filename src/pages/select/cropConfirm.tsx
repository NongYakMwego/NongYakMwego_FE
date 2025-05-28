import TextBalloon1 from "../../components/TextBalloon1";
import characterLogo from "../../assets/characterLogo.png";
import { Link } from "react-router-dom";

export default function CropConfirm() {
  return (
    <div className="flex flex-col items-center pt-7 h-full justify-between">
      <div className="flex flex-col  space-y-3  items-center">
        <TextBalloon1 text="작물을 확인해주세요!" />
        <img
          src={characterLogo}
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60"
        />
      </div>
      <div className="w-full">
        <div className="w-full h-[8rem] md:h-[15rem] px-10">
          <div className="h-full w-full bg-gray-200"></div>
        </div>
        <div className="flex flex-col w-full mt-3 px-10 space-y-1">
          <div className="flex">
            <span className="text-sm sm:text-md md:text-lg items-center w-20">
              작물명
            </span>
            <span className="border-none h-7 sm:h-9 md:h-11 rounded-full pl-4 text-sm sm:text-md md:text-lg font-bold">
              농작물
            </span>
          </div>
          <div className="flex">
            <span className="text-sm sm:text-md md:text-lg items-center w-20">
              작물 유형
            </span>
            <span className="border-none h-7 sm:h-9 md:h-11 rounded-full pl-4 text-sm sm:text-md md:text-lg font-bold">
              유형1
            </span>
          </div>
        </div>
        <div className="flex w-full mt-6">
          <Link
            className="bg-[#e5e5e5] text-black h-11 sm:h-9 md:h-14 w-full rounded-tl-xl font-bold text-lg flex items-center justify-center"
            to="/select/crop"
          >
            아니요
          </Link>
          <Link
            className="bg-[#247f4e] text-white h-11 sm:h-9 md:h-14 w-full rounded-tr-xl font-bold text-lg flex items-center justify-center"
            to="/select/bug"
          >
            맞아요
          </Link>
        </div>
      </div>
    </div>
  );
}
