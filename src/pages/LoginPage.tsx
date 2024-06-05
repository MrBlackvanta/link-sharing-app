import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <div className="w-48 mb-16">
        <img src="logo-full.png" alt="logo" />
      </div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="mt-2 text-neutral-500">
          Add your details below to get back into the app
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-dark-grey">Email address</label>
          <input
            type="email"
            placeholder="e.g alex@email.com"
            className="border border-borders border-solid rounded-lg py-3 px-4"
          />
          <PiEnvelopeSimpleFill />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-dark-grey">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-borders border-solid rounded-lg py-3 px-4"
          />
          <PiLockKeyFill />
        </div>
        <button>Login</button>
      </form>

      <div className="mt-6">
        <p>Don’t have an account?</p>
        <Link to="/create-account">Create account</Link>
      </div>
    </div>
  );
}
