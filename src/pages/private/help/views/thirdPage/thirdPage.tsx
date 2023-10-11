import { informationShow } from '../../help'
import styles from '../styles.module.css'

interface Props {
    value: informationShow
}

const thirdPage = ({ value }: Props) => {
    return (
        <article className={`${styles.article} ${value === 'third' ? styles.true : styles.false}`}>
            <div className={`flex ${styles.div}`}>
                uno
            </div>
        </article>
    )
}

export default thirdPage