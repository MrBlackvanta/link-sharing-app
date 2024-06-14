import clsx from "clsx";
import { IconType } from "react-icons";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  icon: IconType;
  hasError?: boolean;
}

export default function Input({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  hasError = false,
}: InputProps) {
  const inputBaseClasses =
    " w-full rounded-lg border-solid border px-4 py-3 ps-10 transition-all duration-200 ease-in-out";
  const inputValidClasses =
    "focus-visible:outline-purple focus-visible:shadow-purple-shadow caret-purple text-dark-grey";
  const inputErrorClasses = "border-red text-red caret-red";

  const classes = clsx(inputBaseClasses, {
    [inputValidClasses]: !hasError,
    [inputErrorClasses]: hasError,
  });
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs text-dark-grey">{label}</label>}
      <div className="relative">
        <input type={type} placeholder={placeholder} className={classes} />
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 transform" />
      </div>
    </div>
  );
}
