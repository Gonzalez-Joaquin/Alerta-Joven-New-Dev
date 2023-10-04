import Icon from '../icon/icon'
import Text from '../typography/typography'
import styles from './button.module.css'

interface Props {
    type?: 'button' | 'submit' | 'reset'
    value?: string,
    icon?: string,
    className?: string,

    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const button = ({ type, value, icon, onClick }: Props) => {
    return (
        <button className={value ? styles.button : styles.iconButton} type={type || 'button'} onClick={onClick}>
            {value && <Text type='h4' style_type='text-button' styles_color='text-terciario' content={value} />}
            {icon && <Icon icon={icon} style_color='icon-blanco' />}
        </button>
    )
}

export default button