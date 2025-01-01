import React, { FC } from "react";

interface SelectorProps {
  options: { label: string; value: string }[]; // Array of options with label and value
  onChange: (value: string) => void; // Callback triggered when an option is selected
  className?: string; // Additional CSS classes for styling (optional)
  defaultValue?: string; // Default value for the dropdown (optional)
}

const Selector: FC<SelectorProps> = ({
  options,
  onChange,
  className,
  defaultValue,
}) => {
  return (
    <select
      className={`bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Selector;
