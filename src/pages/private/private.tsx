import { Navigate, Route } from "react-router-dom"
import { lazy } from "react"

import * as Layouts from '../../layouts'
import { RoutesWithNotFound } from "../../utils"
import { PrivateRoutes } from "../../model/routes"

const Home = lazy(() => import('./Home/Home'))

export const Private = () => {
    return (
        <>
            <Layouts.Header header_type="private" />
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
                <Route path={PrivateRoutes.HOME} element={<Home />} />
            </RoutesWithNotFound>
        </>
    )
}

export default Private