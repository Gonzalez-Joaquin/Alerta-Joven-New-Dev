import Text from '../../typography/typography'
import Button from '../../buttons/button'
import styles from './medium.module.css'
import { PopUp } from '../../../layouts'
import { useState } from 'react'

interface Props {
    data: {
        id: number,
        title: string,
        desc: string,
        endDate: string
    }
}

const medium = ({ data }: Props) => {

    const { id, title, desc, endDate } = data
    const [popUpMode, setPopUpMode] = useState(false)

    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.information}`}>
                <Text type='h3' style_type='text-title' content={title} />
                <Text type='h4' style_type='text-button' styles_color='text-secundario' content={desc.length > 80 ? desc.slice(0, 80) + '...' : desc} />
            </div>
            <div className={`flex ${styles.buttons}`}>
                <Button value='Ver' onClick={() => setPopUpMode(!popUpMode)} />
                <div className={`${styles.state} ${endDate !== 'En progreso' ? styles.true : styles.false} `}></div>
            </div>
            <PopUp.coursePreview id={id} mode={popUpMode} setMode={mode => setPopUpMode(mode)} />
        </div>
    )
}

export default medium