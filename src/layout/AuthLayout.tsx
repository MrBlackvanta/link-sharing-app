import { Logo } from "components/common";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Toaster />
      <div className="md:grid md:min-h-screen md:content-center md:bg-neutral-50">
        <div className="grid w-full gap-16 p-8 md:gap-[51px]">
          <Logo />
          <Outlet />
        </div>
      </div>
    </>
  );
}
