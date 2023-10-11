import { informationShow } from '../../help'
import styles from '../styles.module.css'

interface Props {
    value: informationShow
}

const secondPage = ({ value }: Props) => {
    return (
        <article className={`${styles.article} ${value === 'second' ? styles.true : styles.false}`}>
            <div className={`flex ${styles.div}`}>

            </div>
            <div className={`flex ${styles.div}`}>dos</div>
            <div className={`flex ${styles.div}`}>tres</div>
        </article>
    )
}

export default secondPage