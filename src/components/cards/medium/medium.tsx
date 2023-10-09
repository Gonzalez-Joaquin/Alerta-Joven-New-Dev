import Text from '../../typography/typography'
import Button from '../../buttons/button'
import styles from './medium.module.css'

interface Props {
    data: {
        title: string,
        desc: string,
        endDate: string
    }
}

const medium = ({ data }: Props) => {

    const { title, desc, endDate } = data

    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.information}`}>
                <Text type='h3' style_type='text-title' content={title} />
                <Text type='h4' style_type='text-button' styles_color='text-secundario' content={desc} />
            </div>
            <div className={`flex ${styles.buttons}`}>
                <Button value='Ver' />
                <div className={`${styles.state} ${endDate !== 'En progreso' ? styles.true : styles.false} `}></div>
            </div>
        </div>
    )
}

export default medium