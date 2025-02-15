import React from 'react';

interface LayoutContentProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutContent: React.FC<LayoutContentProps> = ({ children, className }) => {
  console.log(className);
  return (
    <div className={`flex flex-col p-6 bg-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default LayoutContent;
