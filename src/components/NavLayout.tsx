import { Outlet } from "react-router-dom";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { BsMoisture } from "react-icons/bs";
import { RiFunctionAddLine } from "react-icons/ri";
import Plus from "./Plus";

export default function NavLayout() {
  const navItems = [
    { id: 1, icon: <IoHomeOutline className="w-5 h-5" />, text: "Home" },
    { id: 2, icon: <BsMoisture className="w-5 h-5" />, text: "IoT" },
    { id: 3, icon: <Plus />, text: "" },
    { id: 4, icon: <RiFunctionAddLine className="w-5 h-5" />, text: "Others" },
    { id: 5, icon: <IoPersonOutline className="w-5 h-5" />, text: "Profile" },
  ];
  return (
    <div className="w-[33rem] m-auto min-h-screen flex flex-col bg-red-500">
      <div className="flex-1">
        <Outlet />
      </div>

      <div className="h-20 bg-white flex justify-between relative">
        {navItems.map((item) => (
          <div className="flex flex-col flex-1 items-center justify-center">
            <div className="mb-1">{item.icon}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
