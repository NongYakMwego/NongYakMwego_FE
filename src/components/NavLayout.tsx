import { Outlet } from "react-router-dom";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { BsMoisture } from "react-icons/bs";
import { RiFunctionAddLine } from "react-icons/ri";
import Plus from "./Plus";

export default function NavLayout() {
  const navItems = [
    { id: 1, icon: <IoHomeOutline className="md:w-5 md:h-5" />, text: "Home" },
    { id: 2, icon: <BsMoisture className="md:w-5 md:h-5" />, text: "IoT" },
    { id: 3, icon: <Plus />, text: "" },
    {
      id: 4,
      icon: <RiFunctionAddLine className="md:w-5 md:h-5" />,
      text: "Others",
    },
    {
      id: 5,
      icon: <IoPersonOutline className="md:w-5 md:h-5" />,
      text: "Profile",
    },
  ];
  return (
    <div className="w-full max-w-[33rem] m-auto h-screen flex flex-col bg-red-500">
      <div className="flex-1">
        <Outlet />
      </div>

      <div className="h-[4rem] md:h-20 bg-white flex justify-between relative">
        {navItems.map((item) => (
          <div className="flex flex-col flex-1 items-center justify-center">
            <div className="md:mb-1">{item.icon}</div>
            <div className="text-sm md:text-base">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
