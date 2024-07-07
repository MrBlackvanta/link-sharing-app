import { Header } from "components";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-neutral-50">
      <Toaster />
      <div className="mx-auto flex max-h-dvh max-w-[1392px] flex-col maxhd">
        <Header />
        <main className="flex-1 p-4 md:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
