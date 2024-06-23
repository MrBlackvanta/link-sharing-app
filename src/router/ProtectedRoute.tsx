import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCurrentUser } from "service";

type ProtectedRoute = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRoute) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);

  return children;
}
