import { AuthGuard } from "@/guards"
import { PrivateRoutes, PublicRoutes } from "@/models"
import { RoutesWithNotFound } from "@/utilities"
import { lazy } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"

const Login = lazy(() => import("@/pages/Auth/Login"));
const Private = lazy(() => import('@/pages/Private/Private'));


const Router = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}
export default Router