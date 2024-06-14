import { AuthenticationForm, Logo } from "components";

export default function CreateAccountPage() {
  return (
    <div className="grid w-full gap-16 place-self-center md:gap-[51px]">
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
