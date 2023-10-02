import { NavLink } from 'react-router-dom'

import * as Components from '../../components'


import StylesPrivate from './privateHeader.module.css'
import StylesPublic from './publicHeader.module.css'
import StylesHeader from './header.module.css'

import { PublicRoutes } from '../../model/routes'

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
    return (
        <div className={StylesPrivate.container}>
            este es el header privado
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