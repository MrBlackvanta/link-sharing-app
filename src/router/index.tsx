import { createBrowserRouter } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import { LoginPage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
