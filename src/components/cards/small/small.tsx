import { useNavigate } from 'react-router-dom'

import { PrivateRoutes } from '../../../model/routes'
import Text from '../../typography/typography'
import Button from '../../buttons/button'

import styles from './small.module.css'

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
    const navigate = useNavigate()
    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.text}`}>
                <Text type='h4' style_type='text-button' styles_color='text-primario' content={title.length >= 25 ? title.slice(0, 25) + '...' : title} />
                <Text type='h6' style_type='text-subtitle' styles_color='text-secundario' content={`${desc.length >= 50 ? desc.slice(0, 50) + '...' : desc}`} />
            </div>
            <div className={`flex ${styles.button}`}>
                {type === 'individual' && <Button value={'Ver más'} onClick={() => navigate(`/Private/${PrivateRoutes.PREVIEW}/${id}`, { replace: true })} />}
            </div>
        </div>
    )
}

export default small