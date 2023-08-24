import { useContext, useMemo } from 'react';
import { Items } from "./Items";
import { AplicationContext } from '@/context';

const Sidebar = () => {
    const { showMenu } = useContext(AplicationContext);
    const infoMenu = useMemo(() => {
        return !showMenu ? '-translate-x-full' : '-translate-x-0';
    }, [showMenu]);
    return (
        <>
            {/* h-[calc(100vh-4rem)] md:h-[calc(100vh-3.5rem)] */}
            <div style={{ width: 240 + 'px' }} className={`${infoMenu} fixed min-h-screen  overflow-y-auto transition-transform ease-linear bg-blue-950 z-30`}>
                <div className="h-full flex flex-col justify-between">
                    <div id="profile" className="space-y-3 px-2 py-4 border-b border-slate-500 rounded-md">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
                            alt="Avatar user"
                            className="w-10 md:w-16 rounded-full mx-auto"
                        />
                        <div>
                            <h2
                                className="font-medium text-xs md:text-sm text-center text-slate-200"
                            >
                                Andres Calderon
                            </h2>
                            <p className="text-xs text-gray-400 text-center">acaldup@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 px-5 py-5 overflow-y-auto">
                        <Items />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar