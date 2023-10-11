import { HelpProgressBar } from './components'
import * as View from './views'

import styles from './help.module.css'
import { useState } from 'react'

export type informationShow = 'first' | 'second' | 'third' | 'foruth'

const Home = () => {

    const [infoShow, setInfoShow] = useState<informationShow>('first')

    return (
        <section className={`flex ${styles.section}`}>
            <HelpProgressBar />
            <div className={`flex ${styles.container}`}>
                <article className={`flex ${styles.article}`}>
                    hola como estas
                </article>
                <article className={`flex ${styles.slider}`}>
                    <View.first value={infoShow} />
                    <View.second value={infoShow} />
                    <View.third value={infoShow} />
                    <View.foruth value={infoShow} />
                </article>
            </div>
        </section>
    )
}

export default Home