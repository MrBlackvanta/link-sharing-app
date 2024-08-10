import { AuthenticationForm } from "components/auth";
import { useUser } from "hook/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccountView() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) navigate("/");
  }, [user, isLoading, navigate]);

  return (
    <AuthenticationForm
      headingText="Create account"
      subHeadingText="Let’s get you started sharing your links!"
      variant="createAccount"
      footerText="Already have an account?"
      footerLink={{ redirect: "/login", text: "Login" }}
    />
  );
}
