import { Outlet } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <div className="w-[33rem] m-auto h-screen shadow-lg">
      <div>농약 뭐고 헤더</div>
      <Outlet />
    </div>
  );
}
