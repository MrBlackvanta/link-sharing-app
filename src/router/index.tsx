import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthLayout, MainLayout } from "layout";
import { CreateAccountPage, LinksPage, LoginPage } from "pages";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      </QueryClientProvider>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="links" replace />,
      },
      {
        path: "links",
        element: <LinksPage />,
      },
      {
        path: "profile-details",
        element: <h1>profile</h1>,
      },
      {
        path: "preview",
        element: <h1>preview</h1>,
      },
    ],
  },
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <AuthLayout />
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
    ],
  },
]);
