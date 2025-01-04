import React from "react";

interface BadgeProps {
  size?: "small" | "medium" | "large";
  color?: string;
  text: string;
  pill?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

function Badge({
  size = "medium",
  color = "#28a745",
  text,
  pill = false,
  icon,
  className,
}: BadgeProps) {
  const sizeClasses = {
    small: "text-xs px-2.5 py-0.5",
    medium: "text-sm px-3 py-1",
    large: "text-base px-4 py-2",
  };

  return (
    <span
      className={`bg-[${color}] font-medium ${
        sizeClasses[size]
      } ${pill ? "rounded-full" : "rounded"} inline-flex items-center ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </span>
  );
}

export default Badge;
