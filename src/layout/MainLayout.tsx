import { Header } from "components";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
}
