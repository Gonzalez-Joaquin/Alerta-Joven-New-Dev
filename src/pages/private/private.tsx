import { Navigate, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { lazy, useEffect } from "react"

import * as Layouts from '../../layouts'

import { RoutesWithNotFound } from "../../utils"
import { PrivateRoutes } from "../../model/routes"
import { AppDisptach } from "../../redux/store"
import fetchIndividuals from "../../redux/slices/individuals/thunk"

const Home = lazy(() => import('./home/home'))
const Help = lazy(() => import('./help/help'))
const Preview = lazy(() => import('./peview/preview'))
const Dashboard = lazy(() => import('./dashboard/dashboard'))

export const Private = () => {

    const dispatch = useDispatch<AppDisptach>()

    useEffect(() => {
        dispatch(fetchIndividuals())
    }, [])

    return (
        <>
            <Layouts.Header header_type="private" />
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
                <Route path={PrivateRoutes.HOME} element={<Home />} />
                <Route path={PrivateRoutes.HELP} element={<Help />} />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={`${PrivateRoutes.PREVIEW}/:id`} element={<Preview />} />
            </RoutesWithNotFound>
        </>
    )
}

export default Private