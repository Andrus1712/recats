import { AplicationContext } from "@/context";
import { useAppSelector } from "@/hooks";
import { useContext } from 'react';
import { MdMenu } from "react-icons/md";

const Header = () => {

    const { userInfo } = useAppSelector((state) => state.auth);
    const { toggleMenu } = useContext(AplicationContext);


    return (
        <div className='drop-shadow-md z-20'>
            <div className="flex flex-row justify-between h-full">
                <div className="m-2">
                    <button onClick={toggleMenu} className='my-1 mx-auto rounded-full p-2 hover:bg-indigo-950'><MdMenu /></button>
                </div>
                <div className="my-auto">
                    <h2 className='text-md font-semibold p-2'>Header</h2>
                </div>
                <div className="flex flex-row justify-end flex-1">
                    {userInfo && (
                        <a href="/login" className="text-md font-semibold p-2">
                            LogOut
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Header