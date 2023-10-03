import { Navigate, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { lazy, useEffect } from "react"

import * as Layouts from '../../layouts'

import { RoutesWithNotFound } from "../../utils"
import { PrivateRoutes } from "../../model/routes"
import { AppDisptach } from "../../redux/store"
import fetchIndividuals from "../../redux/slices/individuals/thunk"

const Home = lazy(() => import('./home/home'))

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
            </RoutesWithNotFound>
        </>
    )
}

export default Private