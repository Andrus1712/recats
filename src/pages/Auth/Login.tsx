import { useAppDispatch, useAppSelector } from "@/hooks";
import { Ilogin, PrivateRoutes, PublicRoutes } from "@/models";
import { login, logout } from "@/redux/states/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // clearLocalStorage(UserKey);
        dispatch(logout());
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
    }, []);

    const { message } = useAppSelector((state) => state.message);

    const handleLogin = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setLoading(true);

        const loginForm: Ilogin = {
            username,
            password
        }

        dispatch(login(loginForm))
            .unwrap()
            .then(() => {
                setLoading(false);
                navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
            })
            .catch(() => {
                setLoading(false);
            });
    }

    return (<>
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
            <h1 className="font-bold text-2xl">Welcome Back {message}</h1>
            <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="" onSubmit={handleLogin}>
                <label className="font-semibold text-xs" htmlFor="usernameField">Username or Email</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name='username' />
                <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name='password' autoComplete="true" />
                <button className="disabled:bg-blue-400 disabled:text-blue-200 flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" disabled={loading} type='submit'>Login</button>
                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
                </div>
            </form>

            {message &&
                (
                    <div className="flex my-2">
                        <div className="text-xs p-4 bg-red-300 text-red-600 rounded-md" role="alert">
                            {message}
                        </div>
                    </div>
                )}
        </div>
    </>)
}
export default Login