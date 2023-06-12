import { MyToken } from "@/models";
import jwt_decode from "jwt-decode";

export const getUserToken = (): string => {
    const persist = localStorage.getItem('persist:auth');
    if (persist) {
        const data = JSON.parse(persist);
        if (data._token !== undefined) { return JSON.parse(data._token) };
        return "";
    } else {
        return "";
    }
}

export const isTokenExpired = (token: string): boolean => {
    try {
        const jwt_decoded = jwt_decode<MyToken>(token);
        if (jwt_decoded.exp < Date.now() / 1000) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error("error parsing token");
    }
}

export const removeToken = (): void => {
    localStorage.removeItem('persist:auth');
}