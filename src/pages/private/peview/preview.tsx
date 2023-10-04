import styles from './preview.module.css'

const preview = () => {
    return (
        <section className="section flex">
            <article className={`flex ${styles.article}`}></article>
        </section>
    )
}

export default preview