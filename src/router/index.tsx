import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthLayout, MainLayout } from "layout";
import { CreateAccountPage, LinksPage, LoginPage, ProfileDetails } from "pages";
import React from "react";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PreviewPage from "pages/PreviewPage";
import PreviewLayout from "layout/PreviewLayout";

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
    element: <PreviewPage />,
  },
];

const subRoutes: RouteObject[] = [
  {
    path: "preview",
    element: <PreviewPage />,
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
  {
    element: withQueryClientProvider(<PreviewLayout />),
    children: subRoutes,
  },
]);
