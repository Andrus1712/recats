import { URL_DEV } from '@/models';
import { axiosConfig } from '.';
import { AxiosError, AxiosResponse } from 'axios';

export const getAllRooms = () => {
    const options = {
        method: 'GET',
        url: URL_DEV.baseURLDEV + '/rooms',
    };
    return axiosConfig
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
