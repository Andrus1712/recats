import { getUserToken } from '@/helpers';
import { URL_DEV } from '@/models';
import axios, { AxiosInstance } from 'axios';

export const axiosConfig: AxiosInstance = axios.create({
    // baseURL: 'http://localhost:3001/api',
    baseURL: URL_DEV.baseURL,
    headers: {
        Authorization: "Bearer " + getUserToken()
    }
});