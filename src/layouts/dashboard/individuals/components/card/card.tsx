import * as Components from '../../../../../components'

import styles from './card.module.css'

interface Props {
    title: string,
    icon: string,
    value: number
}

const card = ({ title, icon, value }: Props) => {
    return (
        <div className={styles.card}>
            <div className={`flex ${styles.cardHeader}`}>
                <div className={`flex ${styles.icon}`}>
                    <Components.icon icon={icon} style_color='icon-primario' />
                </div>
                <Components.text type='h4' style_type='text-title' styles_color='text-secundario' content={title} size='text-pre-medium' />
            </div>
            <div className={styles.cardContainer}>
                <Components.text type='h3' size='text-medium' style_type='text-button' content={`${value}`} />
            </div>
        </div>
    )
}

export default card