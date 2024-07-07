import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthLayout, MainLayout } from "layout";
import { CreateAccountPage, LinksPage, LoginPage, ProfileDetails } from "pages";
import React from "react";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const queryClient = new QueryClient();

const withQueryClientProvider = (
  element: React.ReactNode,
): React.ReactElement => (
  <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
);

const mainRoutes: RouteObject[] = [
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
    element: <ProfileDetails />,
  },
  {
    path: "preview",
    element: <h1>Preview</h1>,
  },
];

const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "create-account",
    element: <CreateAccountPage />,
  },
];

export const router = createBrowserRouter([
  {
    element: withQueryClientProvider(
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>,
    ),
    children: mainRoutes,
  },
  {
    element: withQueryClientProvider(<AuthLayout />),
    children: authRoutes,
  },
]);
