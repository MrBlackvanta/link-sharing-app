import { AuthenticationForm } from "components/auth";
import { useUser } from "hook/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginView() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) navigate("/");
  }, [user, isLoading, navigate]);

  return (
    <AuthenticationForm
      headingText="Login"
      subHeadingText="Add your details below to get back into the app"
      variant="login"
      footerText="Don’t have an account?"
      footerLink={{ redirect: "/create-account", text: "Create account" }}
    />
  );
}
