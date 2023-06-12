import { removeToken } from "@/helpers";
import { Ilogin, URL_DEV } from "@/models";
import axios from "axios";


export const loginService = (credentials: Ilogin) => {
    const options = {
        method: 'POST',
        url: URL_DEV.baseURL + '/auth/login',
        data: {
            username: credentials.username,
            password: credentials.password
        },
        headers: {},
    }
    return axios.request(options)
        .then(response => {
            return response.data;
        })
        .catch((error) => {
            console.log("Error: " + error);
        });
}

export const logout = () => {
    removeToken();
};