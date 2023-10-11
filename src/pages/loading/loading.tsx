import Text from "../../components/typography/typography"

import styles from './loading.module.css'

const Loading = () => {
    return (
        <div className={`flex ${styles.div}`}>
            <Text type="h4" style_type="text-button" content="Alerta Joven" size="text-large" styles_color="text-secundario" />
            <div className={styles.container}>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default Loading