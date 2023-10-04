import * as Components from '../../../components'
import * as Layouts from '../../../layouts'

import styles from './home.module.css'

const Home = () => {
    return (
        <section className={`section flex ${styles.section}`}>
            <article className={`flex ${styles.article}`}>
                <div className={`flex ${styles.top}`}>
                    <Components.text type='h2' style_type='text-title' content='Seguimientos' size='text-pre-medium' styles_color='text-secundario' />
                    <Components.search />
                </div>
                <Layouts.peopleTracking />
            </article>
            <aside className={`flex ${styles.aside}`}>
                <Components.text type='h2' style_type='text-title' content='Actividad Reciente' size='text-pre-medium' styles_color='text-secundario' />
                <Layouts.recentActivity />
            </aside>
            <div className={styles.containerButton}>
                <Components.button value='Nuevo Seguimiento' />
            </div>
        </section>
    )
}

export default Home