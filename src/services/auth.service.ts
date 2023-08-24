import { removeToken } from "@/helpers";
import { Ilogin, URL_DEV } from "@/models";
import axios, { AxiosError, AxiosResponse } from "axios";

export const loginService = (credentials: Ilogin) => {
  const options = {
    method: "POST",
    url: URL_DEV.baseURLDEV + "/auth/login",
    data: {
      username: credentials.username,
      password: credentials.password,
    },
    headers: {},
  };
  return axios
    .request(options)
    .then((response: AxiosResponse) => {
      // Handle response
      return response;
    })
    .catch((reason: AxiosError) => {
      if (reason.response!.status === 400) {
        // Handle 400
        return reason.response;
      } else {
        // Handle else
        return reason.response;
      }
    });
};

export const logout = () => {
  removeToken();
};
