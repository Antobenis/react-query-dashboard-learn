import { useMutation } from "react-query";
import * as api from 'config/ApiConfig';
import { message } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate()
    return useMutation((formData) => api.login(formData), {
        retry : false,
        onSuccess: (data) =>{
            message.success("login success")
            Cookies.set('tocken', data.token)
            navigate("/home")
        },
        onError:(error) => {
            message.error("Login Not success")
        }
    })
}

