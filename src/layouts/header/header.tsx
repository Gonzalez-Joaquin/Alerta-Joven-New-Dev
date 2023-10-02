import StylesPrivate from './privateHeader.module.css'
import StylesPublic from './publicHeader.module.css'

const Public = () => {
    return (
        <div className={StylesPublic.container} >
            hola
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
        <header>
            {header_type === 'public' && <Public />}
            {header_type === 'private' && <Private />}
        </header>
    )
}

export default Header