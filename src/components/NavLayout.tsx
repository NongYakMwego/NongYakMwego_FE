import { Outlet } from "react-router-dom";

export default function NavLayout() {
  return (
    <div className="w-[600px] m-auto min-h-screen flex flex-col bg-red-500">
      <div className="flex-1">
        <Outlet />
      </div>

      <div className="h-16 bg-blue-500">하단바</div>
    </div>
  );
}
