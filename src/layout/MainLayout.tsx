import { Header } from "components";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-neutral-50">
      <Toaster />
      <div className="mx-auto flex min-h-screen max-w-[1392px] flex-col">
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
