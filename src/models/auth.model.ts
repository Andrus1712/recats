import { Iuser } from '.';

export interface IauthState {
    isLoanding?: boolean;
    error?: any;
    userInfo?: Iuser | undefined;
    _token?: string;
}

export interface Ilogin {
    username: string;
    password: string;
}
