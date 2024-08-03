import { Button, Input } from "components";
import { useUser } from "hook/useUser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { supabase } from "service";
import { LoginForm as LoginFormData } from "types";

export default function LoginForm() {
  const { user: curUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(user: LoginFormData) {
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }

    // TODO
    // CHANGE EMAIL TO FIRST NAME
    setIsLoading(false);
    toast.success(`Welcome, ${curUser?.email}!`);
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
        label="Password"
        placeholder="Enter your password"
        type="password"
        icon={PiLockKeyFill}
        {...register("password", { required: "Can't be empty" })}
        error={errors.password}
      />
      <Button disabled={isLoading}>Login</Button>
    </form>
  );
}
