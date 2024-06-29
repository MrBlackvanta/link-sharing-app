import { Button, Input } from "components";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { supabase } from "service";
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
  const navigate = useNavigate();

  async function onSubmit(user: CreateAccountFormData) {
    const { error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });
    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Successfully created!");
    navigate("/");
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
      <p className="body-s text-neutral-500">
        Password must contain at least 8 characters
      </p>
      <Button>Create new account</Button>
    </form>
  );
}
