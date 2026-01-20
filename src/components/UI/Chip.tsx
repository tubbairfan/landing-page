import React from "react";

type ChipProps = {
  text: string;
  className?: string;
};

export const Chip: React.FC<ChipProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`inline-block text-white px-5 py-2 rounded-full border-2 ${className}`}
      style={{ backgroundColor: "#6E51E0", borderColor: "#5940ba" }}
    >
      {text}
    </span>
  );
};
