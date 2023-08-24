import { PrivateRoutes, RoomsRoutes } from "@/models"
import { RoutesWithNotFound } from "@/utilities"
import { Navigate, Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import Layout from "@/layout/Layout"
import { Rooms } from "./Rooms"

const Private = () => {
    return (
        <>
            <Layout>
                <div className="">
                    <RoutesWithNotFound>
                        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
                        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                        <Route path={PrivateRoutes.HOME} element={<>Home</>} />
                        <Route path={PrivateRoutes.ROOMS}>
                            <Route path={RoomsRoutes.INDEX} element={<Rooms />} />
                            <Route path={RoomsRoutes.CREATE} element={<>Create</>} />
                        </Route>
                    </RoutesWithNotFound>
                </div>
            </Layout>
        </>
    )
}

export default Private;