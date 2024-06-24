import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import { CreateAccountPage, LoginPage } from "pages";
import ProtectedRoute from "router/ProtectedRoute";
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
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "create-account",
        element: <CreateAccountPage />,
      },
      {
        path: "/",
        element: <Navigate to="links" replace />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "links",
            element: <>links</>,
          },
          {
            path: "profile-details",
            element: <>profile</>,
          },
        ],
      },
    ],
  },
]);
