import React from 'react';

type RadioOption = {
    value: string;
    label: string;
};

type RadioComponentProps = {
    options: RadioOption[];
    name: string;
    selectedValue: string;
    onChange: (value: string) => void;
};

const RadioComponent: React.FC<RadioComponentProps> = ({ options, name, selectedValue, onChange }) => {
    return (
        <div className="flex flex-col space-y-2">
            {options.map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default RadioComponent;