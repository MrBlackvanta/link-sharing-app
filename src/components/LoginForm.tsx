import { Button, Input } from "components";
import { supabase } from "lib/supabase";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PiEnvelopeSimpleFill, PiLockKeyFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { LoginForm as LoginFormData } from "types";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();

  async function onSubmit(user: LoginFormData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });
    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Welcome, X!");
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
      <Button>Login</Button>
    </form>
  );
}
