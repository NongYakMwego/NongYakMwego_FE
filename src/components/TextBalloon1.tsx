import { Link } from "react-router-dom";

type TextBalloon1Props = {
  text: string;
  isBug?: boolean;
};

export default function TextBalloon1({
  text,
  isBug = false,
}: TextBalloon1Props) {
  return (
    <div className="w-full max-w-[15rem] md:max-w-[40rem] mx-auto px-4">
      <svg
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="cuteShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodColor="rgba(0,0,0,0.1)"
            />
          </filter>
        </defs>

        {/* 말풍선 모양 */}
        <path
          d="
            M50,40 
            a30,30 0 0 1 30,-30 
            h240 
            a30,30 0 0 1 30,30 
            v100 
            a30,30 0 0 1 -30,30 
            h-95 
            l-15,25 
            l-15,-25 
            h-115 
            a30,30 0 0 1 -30,-30 
            z"
          fill="white"
          filter="url(#cuteShadow)"
        />

        {/* 텍스트 영역 */}
        <foreignObject x="60" y="50" width="280" height="100">
          <div className="w-full h-full flex flex-col justify-between items-center text-2xl sm:text-lg md:text-xl font-bold text-[#333] text-center break-words">
            <div>{text}</div>
            {isBug && (
              <Link
                to="/main"
                className="bg-red-500 h-10 w-full rounded-full font-bold text-white text-base sm:text-lg flex items-center justify-center mt-2"
              >
                아니요
              </Link>
            )}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
