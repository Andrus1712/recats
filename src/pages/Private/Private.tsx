import { RoutesWithNotFound } from "@/utilities"
import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "@/models"
import { Dashboard } from "./Dashboard"

const Private = () => {
    return (
        <div className="">
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.HOME} element={<>Home</>} />
            </RoutesWithNotFound>
        </div>
    )
}

export default Private;