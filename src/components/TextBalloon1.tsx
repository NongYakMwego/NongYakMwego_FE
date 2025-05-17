import { Link } from "react-router-dom";

type TextBalloon1Props = {
  text: string;
  width?: number;
  height?: number;
  isBug?: boolean;
};

export default function TextBalloon1({
  text,
  width = 24,
  height = 13,
  isBug = false,
}: TextBalloon1Props) {
  return (
    <svg
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="cuteShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="6"
            floodColor="rgba(0,0,0,0.1)" // flood-color → floodColor
          />
        </filter>
      </defs>

      {/* 말풍선 본체 */}
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

      {/* foreignObject 안에 텍스트 넣기 */}
      <foreignObject x="60" y="50" className="w-72 h-24 absolute">
        <div className="w-full h-full flex flex-col justify-between items-center text-xl font-bold text-[#333] text-center break-words">
          <div>{text}</div>
          {isBug && (
            <Link
              to="/main"
              className="bg-red-500 h-11 w-full rounded-full font-bold text-lg flex items-center justify-center"
            >
              아니요
            </Link>
          )}
        </div>
      </foreignObject>
    </svg>
  );
}
