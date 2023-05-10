"use client";
import clsx from "clsx";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

import React from "react";

interface InputProps {
 label: string;
 id: string;
 type?: string;
 required?: boolean;
 errors: FieldErrors;
 register: UseFormRegister<FieldValues>;
 disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
 label,
 id,
 type,
 required,
 register,
 errors,
 disabled,
}) => {
 return (
  <div>
   <label
    htmlFor={id}
    className="
        block
        text-smm
        font-medium
        leading-6
        text-gray-900
        "
   >
    {label}
   </label>
   <div className=""></div>
  </div>
 );
};

export default Input;
