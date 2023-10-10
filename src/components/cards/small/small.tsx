import { useNavigate } from 'react-router-dom'

import { PrivateRoutes } from '../../../model/routes'
import Text from '../../typography/typography'
import Button from '../../buttons/button'

import styles from './small.module.css'
import { useState } from 'react'
import { PopUp } from '../../../layouts'

interface Props {
    type: 'individual' | 'tracking'
    data: {
        id: number
        title: string,
        desc: string,
    }
}

const small = ({ data, type }: Props) => {
    const { id, title, desc } = data
    const [mode, setMode] = useState(false)
    const navigate = useNavigate()
    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.text}`}>
                <Text type='h4' style_type='text-button' styles_color='text-primario' content={title.length >= 50 ? title.slice(0, 50) + '...' : title} />
                <Text type='h6' style_type='text-subtitle' styles_color='text-secundario' content={`${desc.length >= 85 ? desc.slice(0, 85) + '...' : desc}`} />
            </div>
            <div className={`flex ${styles.button}`}>
                {type === 'individual' && <Button value={'Ver más'} onClick={() => navigate(`/Private/${PrivateRoutes.PREVIEW}/${id}`, { replace: true })} />}
                {type === 'tracking' && (
                    <>
                        <Button value={'Ver más'} onClick={() => setMode(!mode)} />
                        <PopUp.trackingPreview id={id} mode={mode} setMode={mode => setMode(mode)} />
                    </>
                )}
            </div>
        </div>
    )
}

export default small