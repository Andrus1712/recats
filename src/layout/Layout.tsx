import { AplicationContext } from '@/context';
import { MediaQueries } from '@/models';
import { UIEvent, useContext, useState } from 'react';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

interface Props {
    children: JSX.Element | JSX.Element[]
}
const Layout = ({ children }: Props) => {

    const { screenSize, showMenu, content } = useContext(AplicationContext);
    const [bgClass, setBgClass] = useState<string>("");

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {

        if (e.currentTarget.scrollTop > 30) {
            setBgClass('bg-white border-b');
        } else {
            setBgClass('');
        }
    }

    return (
        <div className="flex flex-col" ref={content}>
            {/* sidebar */}
            <Sidebar />

            {/* content */}
            {/* crear enun para los tipos de pantallas */}
            {screenSize <= MediaQueries.sm ?
                <div onScroll={handleScroll} className={`h-screen static overflow-y-auto lg:transition-all`}>
                    <Content bg={bgClass}>
                        {children}
                    </Content>
                </div>
                :
                <div onScroll={handleScroll} className={`h-screen static overflow-y-auto lg:transition-all`} style={showMenu ? { marginLeft: 240 + 'px' } : { marginLeft: 0 + 'px' }}>
                    <Content bg={bgClass}>
                        {children}
                    </Content>
                </div>
            }
        </div >
    )
}
export default Layout