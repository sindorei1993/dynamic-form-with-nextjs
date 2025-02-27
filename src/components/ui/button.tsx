import React from "react";
import Spinner from "./spinner";
import { cn } from "@/src/utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 max-w-fit";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
      : "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500";

  return (
    <button
      className={cn(`${baseStyles} ${variantStyles}`, className)}
      {...props}
    >
      {props.disabled ? <Spinner /> : children}
    </button>
  );
};

export default Button;
