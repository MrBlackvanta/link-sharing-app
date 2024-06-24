import { Header } from "components";
import { useUser } from "hook/useUser";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { user } = useUser();

  return (
    <div className="grid min-h-screen bg-neutral-50">
      <Toaster />
      {user && <Header />}
      <Outlet />
    </div>
  );
}
