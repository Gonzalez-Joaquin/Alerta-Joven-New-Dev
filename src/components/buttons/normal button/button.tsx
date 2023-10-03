import Text from '../../typography/typography'
import styles from './button.module.css'

interface Props {
    type?: 'button' | 'submit' | 'reset'
    value: string,
}

const button = ({ type, value }: Props) => {
    return (
        <button className={styles.button} type={type || 'button'}>
            <Text type='h4' style_type='text-button' styles_color='text-terciario' content={value} />
        </button>
    )
}

export default button