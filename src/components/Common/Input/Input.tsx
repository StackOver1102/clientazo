import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className, label, icon }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 font-semibold">{label}</label>}
      <div className="relative flex items-center">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full pr-10 ${className}`}
        />
        {icon && <span className="absolute right-3 pointer-events-none">{icon}</span>}
      </div>
    </div>
  );
};

export default Input;
