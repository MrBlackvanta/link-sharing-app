import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "rounded-lg px-7 py-3 text-white transition-colors duration-200 ease-in-out disabled:opacity-25";
  const primaryClasses =
    "bg-purple heading-s enabled:active:bg-purple-hover enabled:active:shadow-purple-shadow";
  const secondaryClasses =
    "bg-gray-500 heading-s enabled:active:bg-gray-600 enabled:active:shadow-gray-shadow";

  const classes = clsx(baseClasses, {
    [primaryClasses]: variant === "primary",
    [secondaryClasses]: variant === "secondary",
  });
  return <button className={classes}>{children}</button>;
}
