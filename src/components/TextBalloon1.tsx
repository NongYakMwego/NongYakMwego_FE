export default function TextBalloon1() {
  return (
    <svg
      className="w-96 h-52" // Tailwind로 실제 사이즈 조절
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
      <foreignObject x="60" y="60" width="280" height="80">
        <div className="w-full h-full flex flex-col justify-center items-center text-xl font-bold text-[#333] text-center ">
          <div>현재 키우시는 농작물을</div>
          <div>선택해주세요! 😄</div>
        </div>
      </foreignObject>
    </svg>
  );
}
