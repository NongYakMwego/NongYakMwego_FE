import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-[600px] bg-red-500 m-auto h-screen">
      <Outlet />
    </div>
  );
}
