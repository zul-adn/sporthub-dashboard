"use client"
import React from 'react'
import cx from "classnames";
import { Button, Input } from '@/app/components';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";

type Props = {}

const schema = yup.object().shape({
  email: yup.string().required("Email harus diisi"),
  password: yup.string().required("Password harus diisi"),
});

const LoginForm = () => {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
      resolver: yupResolver(schema),
    });

    const handleLogin = () => {

    }

  return (
    <>
      <div
        className={cx(
          "p-8 pb-4 relative",
          "sm:px-16 sm:pb-4 sm:pt-16",
          "lg:px-24 lg:pb-8 lg:pt-24",
          "flex flex-col justify-center items-center h-full"
        )}>
        <div className="space-y-6 max-w-lg w-full">
          {/* <img
            src={lifeForce}
            alt="LifeForce"
            className="h-8 lg:h-12 lg:mb-8"
          /> */}
          {/* <div className="font-medium">
            Silahkan masuk menggunakan akun yang telah terdaftar, jika anda
            belum memilki akun silahkan mendaftar terlebih dahulu
          </div> */}
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col space-y-6">
              <Input
                size="lg"
                type="email"
                label="Email"
                control={control}
                name="email"
                placeholder="Masukan email"
              />
              <Input
                size="lg"
                type="password"
                label="Password"
                control={control}
                name="password"
                placeholder="Masukan password"
              />
              <Button
                size="lg"
                className="w-full"
                isLoading={false}
                hideTextOnLoading
                type="submit">
                Masuk
              </Button>
            </div>
          </form>
          <div>
            <Button
              size="lg"
              className="w-full"
              isLoading={false}
              variant="primary-text"
              type="submit">
              <FcGoogle size={25} />
              <span className='ml-4'>Masuk dengan Google</span>
            </Button>
          </div>

          {/* {error && error?.message ? (
            error?.message === "MULTI_ROLE_DETECTION" ? (
              <Alert
                variant="error"
                className="!items-start"
                iconClassName="mt-0.5">
                <div>
                  <div className="mb-2">
                    Tidak dapat login dikarenakan user memiliki lebih dari 1
                    role:
                  </div>
                  {error?.data &&
                    error?.data.map((e: any, key: number) => (
                      <div className="font-bold text-xs" key={key}>
                        {e}
                      </div>
                    ))}
                  <div className="mt-1">
                    Mohon hubungi tim Access Management untuk menghapus Role
                    yang tidak digunakan
                  </div>
                </div>
              </Alert>
            ) : (
              <Alert variant="error" text={parseLoginError(error.message)} />
            )
          ) : null} */}
        </div>
        <div className="text-center absolute bottom-6">
          <div className="flex justify-center items-center space-x-2 text-gray-500">
            {/* <img alt="Life Force Admin" src={ifgIcon} className="h-4" /> */}
            {/* <span className="mt-1">© 2020 IFG - All Rights Reserved</span> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm