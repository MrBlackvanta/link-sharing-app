import { AuthenticationForm, Logo } from "components";

export default function LoginPage() {
  return (
    <div className="grid gap-16 place-self-center md:gap-[51px]">
      <Logo />

      <AuthenticationForm />
    </div>
  );
}
