import TextBalloon1 from "../../components/textBalloon1";
import characterLogo from "../../assets/characterLogo.svg";
import { IoIosSearch } from "react-icons/io";

export default function Crop() {
  return (
    <div className="flex flex-col items-center py-5 px-10 h-full justify-between">
      <div className="flex flex-col items-center">
        <TextBalloon1 />
        <img src={characterLogo} className="w-60 h-60" />
      </div>
      <form className="flex flex-col space-y-10 w-full">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2 ">
            <span className="font-semibold">직접 검색하기</span>
            <div className="relative">
              <input
                type="text"
                placeholder="농작물을 검색하세요"
                className="border-none h-11 w-full rounded-full pl-4 pr-10"
              />
              <IoIosSearch className="absolute top-1/2 -translate-y-1/2 right-0 w-6 h-6 mr-3" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">직접 입력하기</span>
            <input
              type="text"
              placeholder="농작물을 입력하세요"
              className="border-none h-11 w-full rounded-full pl-4"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">직접 사진찍기</span>
            <input
              type="text"
              placeholder="농작물을 찍으세요"
              className="border-none h-11  w-full rounded-full pl-4"
            />
          </div>
        </div>
        <button className="bg-red-500 h-11 w-full rounded-full font-bold text-lg">
          다음
        </button>
      </form>
    </div>
  );
}
