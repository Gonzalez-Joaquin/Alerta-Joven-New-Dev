import * as Components from '../../../../../components'

import styles from './cardMedium.module.css'

const cardMedium = () => {
    return (
        <div className={`flex ${styles.card}`}>
            <div className={styles.left}>
                <div>
                    <Components.text type='h3' style_type='text-title' content='Gráfico de eficiencia' />
                    <Components.text type='h4' style_type='text-button' content='Diagrama de barras' styles_color='text-secundario' />
                </div>
                <div className={`flex ${styles.bottom}`}>
                    <div className={`flex ${styles.item}`}>
                        <div className={styles.shape} style={{ background: '#9BC53D' }}></div>
                        <Components.text type='h4' style_type='text-button' content='Trabajo: Si - Estudios: Si' />
                    </div>
                    <div className={`flex ${styles.item}`}>
                        <div className={styles.shape} style={{ background: '#5BC0EB' }}></div>
                        <Components.text type='h4' style_type='text-button' content='Trabajo: Si - Estudios: No' />
                    </div>
                    <div className={`flex ${styles.item}`}>
                        <div className={styles.shape} style={{ background: '#FDE74C' }}></div>
                        <Components.text type='h4' style_type='text-button' content='Trabajo: No - Estudios: Si' />
                    </div>
                    <div className={`flex ${styles.item}`}>
                        <div className={styles.shape} style={{ background: '#C3423F' }}></div>
                        <Components.text type='h4' style_type='text-button' content='Trabajo: No - Estudios: No' />
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.barraContainer}>
                    <div className={styles.shapeBorder}>
                        <div style={{ background: '#9BC53D', height: '25%' }}></div>
                    </div>
                    <div className={styles.shapeBorder}>
                        <div style={{ background: '#5BC0EB', height: '16.67%' }}></div>
                    </div>
                    <div className={styles.shapeBorder}>
                        <div style={{ background: '#FDE74C', height: '33.33%' }}></div>
                    </div>
                    <div className={styles.shapeBorder}>
                        <div style={{ background: '#C3423F', height: '25%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardMedium