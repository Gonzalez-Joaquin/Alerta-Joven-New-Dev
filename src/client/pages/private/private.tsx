import { lazy } from "react"
import { Navigate, Route } from "react-router-dom"

import { RoutesWithNotFound } from "../../utils"
import { PrivateRoutes } from "../../model/routes"

const Home = lazy(() => import('./Home/Home'))
const Messages = lazy(() => import('./Messages/Messages'))
const Profile = lazy(() => import('./Profile/Profile'))

export const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path={PrivateRoutes.MESSAGES} element={<Messages />} />
            <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
        </RoutesWithNotFound>
    )
}

export default Private