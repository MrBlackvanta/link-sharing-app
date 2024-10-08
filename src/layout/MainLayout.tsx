import { Header, PhoneContainer } from "components/common";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Toaster />
      <div className="maxhd mx-auto flex max-h-dvh max-w-[1392px] flex-col">
        <Header />
        <main className="flex flex-1 gap-6 p-4 md:pt-0">
          <PhoneContainer />
          <Outlet />
        </main>
      </div>
    </>
  );
}
