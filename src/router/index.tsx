import { createBrowserRouter } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import { CreateAccountPage, LoginPage, HomePage } from "pages";
import ProtectedRoute from "./ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/create-account",
        element: <CreateAccountPage />,
      },
      {
        path: "",
        element: (
          <QueryClientProvider client={queryClient}>
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          </QueryClientProvider>
        ),
        index: true,
      },
    ],
  },
]);
