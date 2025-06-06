import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <div className="w-full max-w-[33rem] m-auto h-screen shadow-lg">
      <Outlet />
    </div>
  );
}
