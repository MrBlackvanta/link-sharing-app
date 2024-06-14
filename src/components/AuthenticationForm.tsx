import { Button, Input } from "components";
import { useForm } from "react-hook-form";
import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { LoginForm } from "types";

export default function AuthenticationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  function onSubmit(data: LoginForm) {
    console.log(data);
  }

  return (
    <div className="md:mx-auto md:max-w-md md:rounded-xl md:bg-white md:p-10">
      <div className="mb-10">
        <h1 className="md:heading-m text-2xl font-bold">Login</h1>
        <p className="body-m mt-2 text-neutral-500">
          Add your details below to get back into the app
        </p>
      </div>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email address"
          placeholder="e.g alex@email.com"
          type="email"
          icon={PiEnvelopeSimpleFill}
          {...register("email", { required: "Can't be empty" })}
          error={errors.email}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          icon={PiLockKeyFill}
          {...register("password", { required: "Can't be empty" })}
          error={errors.password}
        />
        <Button>Login</Button>
      </form>

      <div className="mt-6 text-center">
        <p className="body-m text-neutral-500">Don’t have an account?</p>
        <Link to="/create-account" className="text-purple body-m">
          Create account
        </Link>
      </div>
    </div>
  );
}
