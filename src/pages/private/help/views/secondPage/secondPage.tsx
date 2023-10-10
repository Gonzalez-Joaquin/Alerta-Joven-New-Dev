import styles from '../styles.module.css'

const secondPage = () => {
    return (
        <article className={`flex ${styles.article}`}>
            <div className={`flex ${styles.div}`}>uno</div>
            <div className={`flex ${styles.div}`}>dos</div>
            <div className={`flex ${styles.div}`}>tres</div>
        </article>
    )
}

export default secondPage