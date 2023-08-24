import { loginService, logout } from './auth.service';
import { getAllRooms } from './rooms.service';

const AuthService = {
    loginService,
    logout,
};
export default AuthService;
export * from './axios.config';

export const RoomsService = {
    getAllRooms,
};
