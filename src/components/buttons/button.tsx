import Text from '../typography/typography'
import styles from './button.module.css'

interface Props {
    type?: 'button' | 'submit' | 'reset'
    value?: string,
    icon?: string,
    className?: string,
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const button = ({ type, value, icon, disabled, onClick }: Props) => {
    return (
        <button className={`flex ${styles.button}`} type={type || 'button'} onClick={onClick} disabled={disabled || false}>
            {value && <Text type='h4' style_type='text-button' styles_color='text-terciario' content={value} />}
            {icon && <i className={`${styles.icon} fi fi-br-${icon}`}></i>}
        </button>
    )
}

export default button