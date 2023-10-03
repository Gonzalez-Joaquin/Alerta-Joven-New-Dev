import * as Components from '../../../components'
import * as Layouts from '../../../layouts'

import styles from './home.module.css'

const Home = () => {
    return (
        <section className={`section flex ${styles.section}`}>
            <article className={`flex ${styles.article}`}>
                <Components.text type='h2' style_type='text-title' content='Nuevos Seguimientos' size='text-pre-medium' styles_color='text-secundario' />
                <Layouts.newTrackings />
                <Components.text type='h2' style_type='text-title' content='Historial de Seguimientos' size='text-pre-medium' styles_color='text-secundario' />
                <Layouts.historyTrakings />
            </article>
            <aside className={`flex ${styles.aside}`}>
                <Components.text type='h2' style_type='text-title' content='Actividad Reciente' size='text-pre-medium' styles_color='text-secundario' />
                <Layouts.recentActivity />
            </aside>
            <div className={styles.containerButton}>
                <Components.buttons.normal_button value='Cargar Seguimiento' />
            </div>
        </section>
    )
}

export default Home