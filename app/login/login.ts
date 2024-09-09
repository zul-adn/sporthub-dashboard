"use server"
import axios from "axios"
import { loginAPI } from "./api"
import { ILoginProps } from "./interface"
import { getAuthCookie } from "@/bootstrap/auth-cookies"
import { cookies } from "next/headers"
import { BASE_URL_API } from "@/const"
import { redirect } from "next/navigation"


export default async function Login(payload: ILoginProps){
       
const res = await fetch(`${BASE_URL_API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
        console.log(res)
    return { error: "Credentials are not valid." };
  }
  const cookie = getAuthCookie(res);
  if (cookie?.accessToken) {
    cookies().set(cookie.accessToken);
  }
  if (cookie?.refreshToken) {
    cookies().set(cookie.refreshToken);
  }
  redirect("/");
} 
       
     
  
