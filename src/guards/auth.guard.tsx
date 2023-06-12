
import { useAppSelector } from "@/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
    const { _token } = useAppSelector((state) => state.auth);
    return _token && _token === "" ? <Navigate replace to="/login" /> : <Outlet />
}


export default AuthGuard;