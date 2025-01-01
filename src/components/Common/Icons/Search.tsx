import React from 'react';

interface SearchIconProps {
  size?: string; // e.g., 'h-5 w-5'
  color?: string; // e.g., 'text-gray-500'
  additionalClasses?: string; // any additional classes
  marginRight?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  size = 'h-5 w-5',
  color = 'text-gray-500',
  additionalClasses = '',
  marginRight = 'mr-2',
}) => {
  return (
    <svg
      className={`${size} ${color} ${additionalClasses} ${marginRight}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
      />
    </svg>
  );
};

export default SearchIcon;
