"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE } from "./auth-cookie";
import { redirect } from "next/navigation";

export const setSession = async (accessToken: string) => {
  try {
    "use server";
    cookies().set(AUTH_COOKIE, accessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
  } catch (error) {
    console.log(error)
  } finally {
    redirect("/")
  }
  
};

export const clearSession = async () => {
  try{
    "use server";
    cookies().delete(AUTH_COOKIE);
  }catch(error) {
    console.log(error)
  }finally{
    redirect("/login")
  }
 
};

export const getCookies = () => {
  return cookies().get(AUTH_COOKIE)?.value
}
