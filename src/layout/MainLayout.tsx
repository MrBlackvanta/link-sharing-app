import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="grid min-h-screen bg-neutral-50">
      <Toaster />
      <Outlet />
    </div>
  );
}
