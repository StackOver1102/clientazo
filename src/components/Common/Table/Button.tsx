import React, { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({ children, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
