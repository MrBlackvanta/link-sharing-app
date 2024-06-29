import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import { CreateAccountPage, LoginPage, LinksPage } from "pages";
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
        path: "links",
        element: (
          <ProtectedRoute>
            <LinksPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile-details",
        element: <ProtectedRoute>profile</ProtectedRoute>,
      },
      {
        path: "preview",
        element: <ProtectedRoute>preview</ProtectedRoute>,
      },
    ],
  },
]);
