import TextBalloon1 from "../../components/TextBalloon1";
import characterLogo from "../../assets/characterLogo.svg";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Bug() {
  return (
    <div className="flex flex-col items-center py-7 px-10 h-full justify-between">
      <div className="flex flex-col items-center">
        <TextBalloon1 text="현재 해충이 존재하나요?" isBug={true} />
        <img
          src={characterLogo}
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60"
        />
      </div>
      <form className="flex flex-col space-y-10 w-full">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2 ">
            <label className="font-semibold text-sm sm:text-md md:text-lg">
              직접 검색하기
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="해충을 검색하세요"
                className="border-none h-7 sm:h-9 md:h-11 w-full rounded-full pl-4 pr-10"
              />
              <IoIosSearch className="absolute top-1/2 -translate-y-1/2 right-0 w-6 h-6 mr-3" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-sm sm:text-md md:text-lg">
              직접 입력하기
            </label>
            <input
              type="text"
              placeholder="해충을 입력하세요"
              className="border-none h-7 sm:h-9 md:h-11 w-full rounded-full pl-4"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-sm sm:text-md md:text-lg">
              직접 사진찍기
            </label>
            <input
              type="text"
              placeholder="해충을 찍으세요"
              className="border-none h-7 sm:h-9 md:h-11 w-full rounded-full pl-4"
            />
          </div>
        </div>
        {/* <button className="bg-red-500 h-11 w-full rounded-full font-bold text-lg">
          다음
        </button> */}
        <Link
          className="bg-red-500 h-9 sm:h-9 md:h-11 w-full rounded-full font-bold text-lg flex items-center justify-center"
          to="/select/bugConfirm"
        >
          다음
        </Link>
      </form>
    </div>
  );
}
