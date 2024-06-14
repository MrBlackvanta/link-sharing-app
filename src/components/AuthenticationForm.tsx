import { Button, Input } from "components";
import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function AuthenticationForm() {
  return (
    <div className="md:mx-auto md:max-w-md md:rounded-xl md:bg-white md:p-10">
      <div className="mb-10">
        <h1 className="md:heading-m text-2xl font-bold">Login</h1>
        <p className="body-m mt-2 text-neutral-500">
          Add your details below to get back into the app
        </p>
      </div>

      <form className="flex flex-col gap-6">
        <Input
          label="Email address"
          placeholder="e.g alex@email.com"
          type="email"
          icon={PiEnvelopeSimpleFill}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          icon={PiLockKeyFill}
        />
        <Button>Login</Button>
      </form>

      <div className="mt-6 text-center">
        <p>Don’t have an account?</p>
        <Link to="/create-account">Create account</Link>
      </div>
    </div>
  );
}
