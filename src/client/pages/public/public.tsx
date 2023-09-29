import { lazy } from "react"
import { Navigate, Route } from "react-router-dom"

import { RoutesWithNotFound } from "../../utils"

import { PublicRoutes } from "../../model/routes"

const Login = lazy(() => import('./Login/Login'))
const Register = lazy(() => import('./Welcome/Register'))

export const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.REGISTER} element={<Register />} />
        </RoutesWithNotFound>
    )
}

export default Private