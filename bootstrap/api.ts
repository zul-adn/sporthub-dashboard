import axios from "axios";
import { BASE_URL_API } from "@/const";

export const api = axios.create({
  timeout: 60000,
  baseURL: BASE_URL_API,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-Frame-Options": "DENY",
    "Content-type": "application/json",
  },
});

// axios.defaults.withCredentials = true;

api.defaults.headers.common["Accept-Language"] = "en";

api.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers["Content-Type"] = "application/json; charset=UTF-8";

      // const token = store.getState().auth.token.accessToken;
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);


