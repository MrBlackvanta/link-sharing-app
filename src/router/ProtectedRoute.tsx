import { useUser } from "hook/useUser";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRoute = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRoute) {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);

  return children;
}
