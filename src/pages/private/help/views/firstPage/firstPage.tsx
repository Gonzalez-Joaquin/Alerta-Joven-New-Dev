import { firstContent } from '../../../../../data/pages.data'
import * as Components from '../../../../../components'
import { informationShow } from '../../help'

import styles from '../styles.module.css'

interface Props {
    value: informationShow
}

const firstPage = ({ value }: Props) => {
    return (
        <article className={`${styles.article} ${value === 'first' ? styles.true : styles.false}`}>
            <div className={`flex ${styles.div}`}>
                {firstContent.map(({ title, text }, index) => {
                    return (
                        <div key={index} className={`flex ${styles.text}`}>
                            <Components.text type='h3' style_type='text-title' content={title} size='text-pre-medium' />
                            <div className={styles.paragraph}>
                                <Components.text type='p' style_type='text-p' content={text} size='text-extra-small' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

export default firstPage