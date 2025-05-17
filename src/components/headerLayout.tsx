import { Outlet } from "react-router-dom";
import textLogo from "../assets/textLogo.svg";

export default function HeaderLayout() {
  return (
    <div className="w-[33rem] m-auto h-screen shadow-lg">
      <div className="h-16 shadow-md pl-3">
        <img src={textLogo} className="h-full w-auto object-contai" />
      </div>
      <Outlet />
    </div>
  );
}
