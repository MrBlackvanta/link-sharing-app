import { AuthenticationForm, Logo } from "components";
import { useUser } from "hook/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccountPage() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) navigate("/");
  }, [user, isLoading, navigate]);

  return (
    <div className="grid w-full gap-16 place-self-center p-8 md:gap-[51px]">
      <Logo />

      <AuthenticationForm
        headingText="Create account"
        subHeadingText="Let’s get you started sharing your links!"
        variant="createAccount"
        footerText="Already have an account?"
        footerLink={{ redirect: "/login", text: "Login" }}
      />
    </div>
  );
}
