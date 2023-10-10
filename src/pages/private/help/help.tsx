import * as View from './views'

import styles from './help.module.css'

const Home = () => {
    return (
        <section className={`flex ${styles.section}`}>
            <View.first />
            <View.second />
            <View.third />
            <View.foruth />
        </section>
    )
}

export default Home