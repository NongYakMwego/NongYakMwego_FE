export default function TextBalloon1() {
  return (
    <svg
      className="w-96 h-52"
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="cuteShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="6"
            flood-color="rgba(0,0,0,0.1)"
          />
        </filter>
      </defs>

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
    </svg>
  );
}
