import React from "react";
import { mcn } from "@/lib/utils";

// Define the props for the Button component
interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger"; // Add variant for styling
  className?: string;
  disabled?: boolean;
}

const ButtonComponents: React.FC<ButtonProps> = ({
  label,
  onClick,
  style,
  type = "button",
  variant = "primary",
  className,
  disabled = false,
}) => {
  const buttonClass = [
    "btn",
    variant === "primary" && "bg-blue-500 hover:bg-blue-700 text-white",
    variant === "secondary" && "bg-gray-500 hover:bg-gray-700 text-white",
    variant === "danger" && "bg-red-500 hover:bg-red-700 text-white",
    disabled && "opacity-50 cursor-not-allowed",
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={mcn([buttonClass, className])}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ButtonComponents;
