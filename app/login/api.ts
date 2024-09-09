import { api } from "@/bootstrap/api";
import { ILoginProps } from "./interface";

export const loginAPI =  (payload: ILoginProps) => {
   return api.post('/auth/login', payload);
}