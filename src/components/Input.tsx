import clsx from "clsx";
import React from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: IconType;
  error?: FieldError;
  row?: boolean;
};

function InputComponent(
  { label, icon: Icon, error, row = false, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const inputBaseClasses = `w-full rounded-lg border px-4 py-3 ${Icon ? "ps-10" : ""} transition-all duration-200 ease-in-out body-m`;
  const inputValidClasses =
    "focus-visible:outline-purple focus-visible:shadow-purple-shadow caret-purple text-dark-grey";
  const inputErrorClasses =
    "focus-visible:outline-red border-red text-red caret-red";

  const classes = clsx(inputBaseClasses, {
    [inputValidClasses]: !error?.message,
    [inputErrorClasses]: error?.message,
  });
  return (
    <div
      className={clsx("flex flex-col gap-1", {
        "md:flex-row md:items-center md:gap-6": row,
      })}
    >
      {label && (
        <label
          className={clsx("text-xs text-dark-grey", {
            "text-red": error?.message,
            "md:body-m md:flex-1 md:text-neutral-500": row,
          })}
        >
          {label}
        </label>
      )}
      <div
        className={clsx("relative", {
          "xl:basis-[calc(59%+24px] md:basis-[calc(55%+24px)]": row,
        })}
      >
        <input className={classes} ref={ref} {...props} />
        {Icon && (
          <Icon className="absolute start-4 top-1/2 -translate-y-1/2 transform text-neutral-500" />
        )}
        <span className="body-s absolute end-4 top-1/2 -translate-y-1/2 transform bg-white ps-1 text-red">
          {error?.message}
        </span>
      </div>
    </div>
  );
}

const Input = React.forwardRef(InputComponent);

export default Input;
