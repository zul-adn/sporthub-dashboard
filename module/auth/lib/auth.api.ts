import { api } from "@/bootstrap/api"
import { LoginDatas } from "../type"

export const loginAPI = async (datas: LoginDatas) => {
    return api.post('/api/v1/auth/login', datas)
}