import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Button from "components/Button";

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
        <div className="flex flex-col gap-1">
          <label className="text-xs text-dark-grey">Email address</label>
          <div className="relative">
            <input
              type="email"
              placeholder="e.g alex@email.com"
              className="w-full rounded-lg border border-solid border-borders px-4 py-3 ps-10 text-dark-grey"
            />
            <PiEnvelopeSimpleFill className="absolute left-4 top-1/2 -translate-y-1/2 transform" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-dark-grey">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-solid border-borders px-4 py-3 ps-10 text-dark-grey"
            />
            <PiLockKeyFill className="absolute left-4 top-1/2 -translate-y-1/2 transform" />
          </div>
        </div>
        <Button>Login</Button>
      </form>

      <div className="mt-6 text-center">
        <p>Don’t have an account?</p>
        <Link to="/create-account">Create account</Link>
      </div>
    </div>
  );
}