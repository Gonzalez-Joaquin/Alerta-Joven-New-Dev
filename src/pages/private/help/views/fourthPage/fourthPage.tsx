import { informationShow } from '../../help'
import styles from '../styles.module.css'

interface Props {
    value: informationShow
}

const fourthPage = ({ value }: Props) => {
    return (
        <article className={`${styles.article} ${value === 'foruth' ? styles.true : styles.false}`}>
            <div className={`flex ${styles.div}`}>uno</div>
            <div className={`flex ${styles.div}`}>dos</div>
        </article>
    )
}

export default fourthPage