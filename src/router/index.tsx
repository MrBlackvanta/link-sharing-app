import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import { CreateAccountPage, LoginPage, HomePage } from "pages";
import ProtectedRoute from "./ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <MainLayout />
      </QueryClientProvider>
    ),
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
        path: "/",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
        children: [
          {
            element: <Navigate to="links" replace />,
          },
          {
            path: "links",
            element: <h1>links</h1>,
          },
        ],
      },
    ],
  },
]);
