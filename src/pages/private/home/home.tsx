import { useState } from 'react'
import * as Components from '../../../components'
import * as Layouts from '../../../layouts'

import styles from './home.module.css'

const Home = () => {

    const [newTrackingPopUp, setNewTrackingPopUp] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    return (
        <section className={`section flex ${styles.section}`}>
            <article className={`flex ${styles.article}`}>
                <div className={`flex ${styles.top}`}>
                    <Components.text type='h2' style_type='text-title' content='Seguimientos' size='text-pre-medium' styles_color='text-secundario' />
                    <Components.search searchValue={value => setSearchValue(value)} />
                </div>
                <div className={`flex ${styles.bottom}`}>
                    <Layouts.peopleTracking searchValue={searchValue} />
                </div>
            </article>
            <aside className={`flex ${styles.aside}`}>
                <div className={`flex ${styles.top}`}>
                    <Components.text type='h2' style_type='text-title' content='Actividad Reciente' size='text-pre-medium' styles_color='text-secundario' />
                </div>
                <div className={`flex ${styles.bottom}`}>
                    <Layouts.recentActivity />
                </div>
            </aside>
            <div className={styles.containerButton}>
                <Components.button value='Nuevo Seguimiento' onClick={() => setNewTrackingPopUp(!newTrackingPopUp)} />
            </div>
            <Layouts.PopUp.newTracking popUpMode={newTrackingPopUp} setPopUpMode={mode => setNewTrackingPopUp(mode)} />
        </section>
    )
}

export default Home