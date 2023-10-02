import { lazy } from "react"
import { Navigate, Route } from "react-router-dom"
import * as Layouts from '../../layouts'

import { RoutesWithNotFound } from "../../utils"

import { PublicRoutes } from "../../model/routes"

const Welcome = lazy(() => import('./Welcome/Welcome'))
const Login = lazy(() => import('./Login/Login'))

export const Private = () => {
    return (
        <>
            <Layouts.header header_type="public" />
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PublicRoutes.WELCOME} />} />
                <Route path={PublicRoutes.WELCOME} element={<Welcome />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
            </RoutesWithNotFound>
        </>
    )
}

export default Private