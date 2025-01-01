import React from 'react'

interface BadgeProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text: string;
  pill?: boolean;
  icon?: React.ReactNode;
}

function Badge({ size = 'medium', color = 'blue', text, pill = false, icon }: BadgeProps) {
  const sizeClasses = {
    small: 'text-xs px-2.5 py-0.5',
    medium: 'text-sm px-3 py-1',
    large: 'text-base px-4 py-2',
  };

  return (
    <span
      className={`bg-${color}-100 text-${color}-800 font-medium ${sizeClasses[size]} ${pill ? 'rounded-full' : 'rounded'} inline-flex items-center`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </span>
  );
}

export default Badge