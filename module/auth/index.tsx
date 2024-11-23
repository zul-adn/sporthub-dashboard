
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import LoginForm from "./components/login-form";
import { FcGoogle } from "react-icons/fc";


const CoverLogin = () => {
    return (
        <div>
            <div className="absolute inset-0">
                <img
                    src="/assets/images/auth/bg-gradient.png"
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0">
                    <div className="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,#b12a3c_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]">
                        <div className="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"></div>
                        <div className="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
                            {/* <Link href="/" className="ms-10 block w-48 lg:w-72">
                <img
                  src="/assets/images/auth/logo-white.svg"
                  alt="Logo"
                  className="w-full"
                />
              </Link>
              <div className="mt-24 hidden w-full max-w-[430px] lg:block">
                <img
                  src="/assets/images/auth/login.svg"
                  alt="Cover Image"
                  className="w-full"
                />
              </div> */}
                        </div>
                    </div>
                    <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
                        <div className="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
                            <Link href="/" className="block w-8 lg:hidden">
                                <img
                                    src="/assets/images/logo.svg"
                                    alt="Logo"
                                    className="mx-auto w-10"
                                />
                            </Link>
                        </div>
                        <div className="w-full max-w-[440px] lg:mt-16">
                            <div className="mb-10">
                                <h1 className="text-3xl font-extrabold uppercase !leading-snug  md:text-4xl">
                                    Masuk
                                </h1>
                                <p className="text-base font-bold leading-normal text-white-dark">
                                    Masukan email dan password anda
                                </p>
                            </div>
                            <LoginForm />
                            {/*<div className="text-center dark:text-white md:mt-9">*/}
                            {/*    Belum punya akun?&nbsp;*/}
                            {/*    <Link*/}
                            {/*        href="/auth/cover-register"*/}
                            {/*        className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">*/}
                            {/*        Daftar*/}
                            {/*    </Link>*/}
                            {/*</div>*/}

                {/*            <div className="relative my-7 text-center md:mb-9">*/}
                {/*                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>*/}
                {/*                <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">*/}
                {/*  or*/}
                {/*</span>*/}
                {/*            </div>*/}
                {/*            <>*/}
                {/*                <button className="w-full btn btn-outline-primary bg-white">*/}
                {/*                    <FcGoogle size={25} className="mr-4" /> Masuk dengan Google*/}
                {/*                </button>*/}
                {/*            </>*/}
                        </div>

                        <p className="absolute bottom-6 w-full text-center dark:text-white">
                            © {new Date().getFullYear()}. Made with ❤️ SportHub
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverLogin;
