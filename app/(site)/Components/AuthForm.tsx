"use client";

import Input from "@/app/Components/Inputs/Input";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
 const [variant, setVariant] = useState<Variant>("LOGIN");
 const [isLoading, setIsLoading] = useState(false);

 const toggleVariant = useCallback(() => {
  if (variant === "LOGIN") {
   setVariant("REGISTER");
  } else {
   setVariant("LOGIN");
  }
 }, [variant]);

 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<FieldValues>({
  defaultValues: {
   name: "",
   email: "",
   password: "",
  },
 });

 const onSubmit: SubmitHandler<FieldValues> = (data) => {
  setIsLoading(true);

  if (variant === "REGISTER") {
   console.log("register variant");
  }

  if (variant === "LOGIN") {
   console.log("Next Auth");
  }
 };

 const socialAction = (action: string) => {
  setIsLoading(true);
 };

 return (
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
   <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
     {/* wrap onSubmit in handleSubmit to get data from useForm hook */}
     <Input label="Email" register={register} id="email" errors={errors} />
    </form>
   </div>
  </div>
 );
};

export default AuthForm;
