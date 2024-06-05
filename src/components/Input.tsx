import { IconType } from "react-icons";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  icon: IconType;
}

export default function Input({
  label,
  placeholder,
  type = "text",
  icon: Icon,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-xs text-dark-grey">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg border border-solid border-borders px-4 py-3 ps-10 text-dark-grey"
        />
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 transform" />
      </div>
    </div>
  );
}
