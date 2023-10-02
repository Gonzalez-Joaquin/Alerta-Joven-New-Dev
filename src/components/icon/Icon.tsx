import './Icon.css'

interface IconProps {
    icon: string,
    style_color?: 'icon-fuente-primaria' | 'icon-fuente-secundaria' | 'icon-primario' | 'icon-secundario' | 'icon-blanco',
    size?: 'icon-small' | 'icon-medium' | 'icon-large' | 'icon-auto',
}

const Icon = (props: IconProps) => {
    const classNames = `icon fi fi-br-${props.icon} ${props.style_color || 'icon-fuente-primaria'} ${props.size || ''}`;

    return <i className={classNames} />
}

export default Icon