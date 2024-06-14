import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="grid min-h-screen bg-neutral-50 p-8">
      <Outlet />
    </div>
  );
}
