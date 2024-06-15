import { AuthenticationForm, Logo } from "components";

export default function LoginPage() {
  return (
    <div className="grid w-full gap-16 place-self-center p-8 md:gap-[51px]">
      <Logo />

      <AuthenticationForm
        headingText="Login"
        subHeadingText="Add your details below to get back into the app"
        variant="login"
        footerText="Don’t have an account?"
        footerLink={{ redirect: "/create-account", text: "Create account" }}
      />
    </div>
  );
}
