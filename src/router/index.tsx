import LoginPage from "pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main Layout</div>,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
