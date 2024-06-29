import { Header } from "components";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Toaster />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-neutral-50 p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}
