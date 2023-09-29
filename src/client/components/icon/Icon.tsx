import './Icon.css'

interface IconProps {
    icon: string,
    style_color?: 'icon-negro' | 'icon-gris' | 'icon-azul' | 'icon-rojo' | 'icon-verde',
    size?: 'icon-small' | 'icon-medium' | 'icon-large' | 'icon-auto',
}

export const Icon = (props: IconProps) => {
    const classNames = `icon fi fi-br-${props.icon} ${props.style_color || 'icon-negro'} ${props.size || ''}`;

    return <i className={classNames} />
}