import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl p-1 shadow-md ${className}`}>
      <div className="border border-gray-100 p-4 rounded-xl">
        {children}
      </div>
    </div>
  );
};
