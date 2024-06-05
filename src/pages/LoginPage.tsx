import { AuthenticationForm, Logo } from "components";

export default function LoginPage() {
  return (
    <div className="grid h-screen place-items-center pb-6">
      <Logo />
      <div className="mb-16" />
      <AuthenticationForm />
    </div>
  );
}
