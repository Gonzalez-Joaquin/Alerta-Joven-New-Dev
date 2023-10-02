import { lazy } from "react"
import { Navigate, Route } from "react-router-dom"
import * as Layouts from '../../layouts'

import { RoutesWithNotFound } from "../../utils"

import { PublicRoutes } from "../../model/routes"

const Welcome = lazy(() => import('./welcome/welcome'))
const Login = lazy(() => import('./login/login'))

export const Private = () => {
    return (
        <>
            <Layouts.Header header_type="public" />
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PublicRoutes.WELCOME} />} />
                <Route path={PublicRoutes.WELCOME} element={<Welcome />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
            </RoutesWithNotFound>
        </>
    )
}

export default Private