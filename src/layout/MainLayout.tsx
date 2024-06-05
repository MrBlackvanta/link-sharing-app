import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Outlet />
    </div>
  );
}
