import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthLayout, MainLayout } from "layout";
import { CreateAccountPage, LinksPage, LoginPage } from "pages";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const queryClient = new QueryClient();

function withQueryClientProvider(element: React.ReactNode) {
  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
}

export const router = createBrowserRouter([
  {
    element: withQueryClientProvider(
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>,
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
    element: withQueryClientProvider(<AuthLayout />),
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
