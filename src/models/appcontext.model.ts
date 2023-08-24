export type AppContextType = {
    screenSize: number,
    updateSize: (size: number) => void,
    theme: Theme,
    toggleTheme: () => void,
    showMenu: boolean,
    toggleMenu: () => void,
    content: React.MutableRefObject<HTMLDivElement | null>
}

export type Theme = "light" | "dark";