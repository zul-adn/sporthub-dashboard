import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().required("Email tidak boleh kosong"),
    password: yup.string().required("Password tidak boleh kosong"),
});