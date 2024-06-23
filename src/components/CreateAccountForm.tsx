import { Button, Input } from "components";
import { supabase } from "lib/supabase";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { CreateAccountForm as CreateAccountFormData } from "types";

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateAccountFormData>();
  const password = useRef({});
  password.current = watch("password", "");

  async function onSubmit(user: CreateAccountFormData) {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });
    console.log(data);
    console.log(error);
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
        label="Create password"
        placeholder="At least .8 characters"
        type="password"
        icon={PiLockKeyFill}
        {...register("password", {
          required: "Can't be empty",
          minLength: {
            value: 8,
            message: "Please check again",
          },
        })}
        error={errors.password}
      />
      <Input
        label="Confirm password"
        placeholder="At least .8 characters"
        type="password"
        icon={PiLockKeyFill}
        {...register("confirmPassword", {
          validate: (value) =>
            value === password.current || "Passwords do not match",
        })}
        error={errors.confirmPassword}
      />
      <Button>Login</Button>
    </form>
  );
}
