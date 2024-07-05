import clsx from "clsx";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "heading-s rounded-lg px-7 py-3 transition-colors duration-200 ease-in-out disabled:opacity-25";

  const primaryClasses =
    "bg-purple enabled:active:bg-purple-hover enabled:active:shadow-purple-shadow text-white";

  const secondaryClasses =
    "border-purple text-purple enabled:active:bg-light-purple border";

  const classes = clsx(className, baseClasses, {
    [primaryClasses]: variant === "primary",
    [secondaryClasses]: variant === "secondary",
  });

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
