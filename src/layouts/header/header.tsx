import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import * as Components from '../../components'

import StylesPublic from './publicHeader.module.css'
import StylesHeader from './header.module.css'

import { PrivateRoutes, PublicRoutes } from '../../model/routes'
import { resetUser } from '../../redux/slices/user.slice'

import { RootState } from '../../redux/store'
import { Permissions } from '../../model/user.model'

const Public = () => {
    return (
        <div className={`flex ${StylesPublic.container}`} >
            <Components.text type='h2' style_type='text-title' content='Bienvenido!' />
            <nav className={StylesPublic.nav}>
                <ul className={`flex ${StylesPublic.ul}`}>
                    <li className={StylesPublic.li}>
                        <NavLink to={PublicRoutes.WELCOME}
                            className={({ isActive }) => (isActive ? StylesPublic.active : StylesPublic.link)}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className={StylesPublic.li}>
                        <NavLink to={PublicRoutes.LOGIN}
                            className={({ isActive }) => (isActive ? StylesPublic.active : StylesPublic.link)}>
                            Iniciar sesión
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const Private = () => {
    const { permissions } = useSelector((store: RootState) => store.user)
    const dispatch = useDispatch()
    return (
        <div className={`flex ${StylesPublic.container}`}>
            <nav className={StylesPublic.nav}>
                <ul className={`flex ${StylesPublic.ul}`}>
                    <li className={StylesPublic.li}>
                        <NavLink to={PrivateRoutes.HOME}
                            className={({ isActive }) => (isActive ? StylesPublic.active : StylesPublic.link)}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className={StylesPublic.li}>
                        <NavLink to={PrivateRoutes.SEARCH}
                            className={({ isActive }) => (isActive ? StylesPublic.active : StylesPublic.link)}>
                            Busqueda
                        </NavLink>
                    </li>
                    {permissions === Permissions.Admin && (
                        <li className={StylesPublic.li}>
                            <NavLink to={PrivateRoutes.DASHBOARD}
                                className={({ isActive }) => (isActive ? StylesPublic.active : StylesPublic.link)}>
                                Panel Administrativo
                            </NavLink>
                        </li>
                    )}
                    <li className={StylesPublic.li}>
                        <NavLink to={PrivateRoutes.HELP}
                            className={({ isActive }) => (isActive ? StylesPublic.active : StylesPublic.link)}>
                            Ayuda
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Link to={PublicRoutes.PUBLIC} replace={true} onClick={() => dispatch(resetUser())} className={StylesPublic.link}>
                Cerrar sesión
            </Link>
        </div>
    )
}

interface HeaderProps {
    header_type: 'public' | 'private'
}

const Header = ({ header_type }: HeaderProps) => {
    return (
        <header className={`flex ${StylesHeader.header}`}>
            {header_type === 'public' && <Public />}
            {header_type === 'private' && <Private />}
        </header>
    )
}

export default Header