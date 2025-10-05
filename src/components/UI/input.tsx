"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm">{label}</label>}
      <input
        {...props}
        className={`input-field border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className || ""}`}
      />
    </div>
  );
};

export default Input;
