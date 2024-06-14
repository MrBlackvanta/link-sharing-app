// CHANGE
// CHANGE

import { Button, Input } from "components";
import { useForm } from "react-hook-form";
import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { LoginForm as LoginFormData } from "types";

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
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
  );
}
