import { Outlet } from "react-router-dom";
import textLogo from "../assets/textLogo.svg";

// HeaderLayout.tsx
export default function HeaderLayout() {
  return (
    <div className="w-full max-w-[33rem] m-auto h-screen shadow-lg flex flex-col">
      <div className="h-20 md:h-16 shadow-md pl-3">
        <img src={textLogo} className="h-full w-auto object-contain" />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
