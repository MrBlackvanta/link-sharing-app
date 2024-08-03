import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function PreviewLayout() {
  return (
    <>
      <Toaster />
      <Outlet />;
    </>
  );
}
