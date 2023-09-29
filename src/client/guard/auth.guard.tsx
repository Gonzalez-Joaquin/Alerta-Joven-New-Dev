import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { PublicRoutes } from '../model/routes'
import { RootState } from '../redux/store'

const AuthGuard = () => {
    const userState = useSelector((store: RootState) => store.user)

    return userState.id !== 0 ? <Outlet /> : <Navigate replace to={PublicRoutes.PUBLIC} />
}

export default AuthGuard