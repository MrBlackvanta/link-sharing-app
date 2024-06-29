import { Link } from "react-router-dom";
import { CreateAccountForm, LoginForm } from "components";

type AuthenticationFormProps = {
  headingText: string;
  subHeadingText: string;
  variant: "login" | "createAccount";
  footerText: string;
  footerLink: { redirect: string; text: string };
};

export default function AuthenticationForm({
  headingText,
  subHeadingText,
  variant,
  footerText,
  footerLink,
}: AuthenticationFormProps) {
  return (
    <div className="md:mx-auto md:w-[476px] md:rounded-xl md:bg-white md:p-10">
      <div className="mb-10">
        <h1 className="heading-dark">{headingText}</h1>
        <p className="body-m mt-2 text-neutral-500">{subHeadingText}</p>
      </div>

      {variant === "login" && <LoginForm />}
      {variant === "createAccount" && <CreateAccountForm />}

      <div className="mt-6 text-center">
        <p className="body-m text-neutral-500">{footerText}</p>
        <Link to={footerLink.redirect} className="body-m text-purple">
          {footerLink.text}
        </Link>
      </div>
    </div>
  );
}
