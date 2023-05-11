"use client";

import Input from "@/app/Components/Inputs/Input";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../Components/Button";

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
          {variant === "REGISTER" && (
            <Input
              label="Email"
              type="email"
              register={register}
              id="email"
              errors={errors}
            />
          )}

          <Input
            label="Email Address"
            register={register}
            id="email"
            type="email"
            errors={errors}
          />
          <Input
            label="Password"
            register={register}
            id="password"
            errors={errors}
            type="password"
          />
          <Button>Test</Button>

          {/* wrap onSubmit in handleSubmit to get data from useForm hook */}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
