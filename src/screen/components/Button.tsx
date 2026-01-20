import React from "react";

type ButtonProps = {
  label: string;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const base =
    "px-4 py-2 rounded-full font-medium transition duration-200";

  const styles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:text-purple-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {label}
    </button>
  );
};
