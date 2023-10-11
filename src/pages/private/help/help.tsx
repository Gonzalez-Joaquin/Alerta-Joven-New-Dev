import * as View from './views'

import styles from './help.module.css'
import { useState } from 'react'

export type informationShow = 'first' | 'second' | 'third' | 'foruth'

const Home = () => {

    const [infoShow, setInfoShow] = useState<informationShow>('first')

    return (
        <section className={`flex ${styles.section}`}>
            <div className={`flex ${styles.container}`}>
                <View.aside value={infoShow} setValue={value => setInfoShow(value)} />
                <div className={`flex ${styles.slider}`}>
                    <View.first value={infoShow} />
                    <View.second value={infoShow} />
                    <View.third value={infoShow} />
                    <View.foruth value={infoShow} />
                </div>
            </div>
        </section>
    )
}

export default Home