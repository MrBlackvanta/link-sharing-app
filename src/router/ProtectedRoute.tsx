import React from "react";

type ProtectedRoute = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRoute) {
  return children;
}
