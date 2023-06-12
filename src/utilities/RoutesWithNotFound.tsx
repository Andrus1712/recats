import { Route, Routes } from "react-router-dom"

export interface Props {
    children: JSX.Element[] | JSX.Element
}

const RoutesWithNotFound = ({ children }: Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<>Not found</>} />
        </Routes>
    )
}
export default RoutesWithNotFound