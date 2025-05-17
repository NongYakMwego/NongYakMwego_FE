import TextBalloon1 from "../../components/textBalloon1";
import characterLogo from "../../assets/characterLogo.svg";
import { Link } from "react-router-dom";

export default function BugConfirm() {
  return (
    <div className="flex flex-col items-center py-7 px-10 h-full justify-between">
      <div className="w-full h-[15rem] bg-gray-500"></div>
      <div className="flex flex-col w-full mt-5 space-y-5">
        <div className="space-y-2">
          <label className="font-semibold">해충명</label>
          <div className="border-none h-11 w-full rounded-full pl-4 flex items-center bg-red-500">
            해충 이름
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-semibold">해충 유형</label>
          <div className="border-none h-11 w-full rounded-full pl-4 flex items-center bg-red-500">
            유형1
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <TextBalloon1 text="해충을 확인해주세요!" width={20} height={10} />
        <img src={characterLogo} className="w-40 h-40" />
      </div>
      <div className="flex w-full space-x-3">
        <Link
          className="bg-red-500 h-11 w-full rounded-full font-bold text-lg flex items-center justify-center"
          to="/select/bug"
        >
          아니요
        </Link>
        <Link
          className="bg-red-500 h-11 w-full rounded-full font-bold text-lg flex items-center justify-center"
          to="/main"
        >
          맞아요
        </Link>
      </div>
    </div>
  );
}
