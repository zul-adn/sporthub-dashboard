"use client";
import { Button, Input } from "@/components";
import IconLockDots from "@/components/icon/icon-lock-dots";
import IconMail from "@/components/icon/icon-mail";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Login from "../login";

const schema = yup.object().shape({
  email: yup.string().required("Email tidak boleh kosong"),
  password: yup.string().required("Password tidak boleh kosong"),
});


const LoginForm = () => {
    const { control, handleSubmit, watch } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: yupResolver(schema),
    });
    const values = watch();

  const handleLogin = (e: any) => {
   Login(values);
  };

  return (
    <form
      className="space-y-5 dark:text-white"
      onSubmit={handleSubmit(handleLogin)}>
      <Input
        name="email"
        label="Email"
        placeholder="Masukan email anda"
        control={control}
        type="email"
        icon={<IconMail fill={true} />}
      />
      <Input
        name="password"
        label="Password"
        placeholder="Masukan password anda"
        control={control}
        type="password"
        icon={<IconLockDots fill={true} />}
      />

      <button type="submit" className="!mt-6 w-full btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
