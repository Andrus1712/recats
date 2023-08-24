import { getCurrentDimension } from '@/helpers';
import { AppContextType, MediaQueries, Theme } from '@/models';
import { useState, createContext, useEffect, useRef } from 'react';


export const AplicationContext = createContext<AppContextType>({} as AppContextType);

export interface Props {
    children: JSX.Element[] | JSX.Element
}

export const AplicationContextProvider = ({ children }: Props) => {

    const [screenSize, setScreenSize] = useState<number>(getCurrentDimension().width);
    const [theme, setTheme] = useState<Theme>("light");
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const content = useRef<HTMLDivElement | null>(null);

    const updateSize = (size: number) => {
        setScreenSize(size);
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension().width)
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        });
    }, [screenSize]);

    useEffect(() => {
        if (screenSize >= MediaQueries.md) {
            setShowMenu(true);
        }
    }, []);

    useEffect(() => {
        if (screenSize <= MediaQueries.sm) {
            content.current && content.current.addEventListener("click", handleMausePos);
        }

        return (() => {
            content.current && content.current.removeEventListener('click', handleMausePos);
        });
    }, [showMenu]);

    function handleMausePos(e: MouseEvent): void {
        const mouseClickWidth = e.clientX;
        if (mouseClickWidth > 240) {
            setShowMenu(false);
        }
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }


    return (
        <>
            <AplicationContext.Provider value={
                {
                    screenSize, updateSize,
                    theme, toggleTheme,
                    showMenu, toggleMenu,
                    content
                }
            }>
                {children}
            </AplicationContext.Provider>
        </>
    )
}