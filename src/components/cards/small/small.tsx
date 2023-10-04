import { useNavigate } from 'react-router-dom'

import { SensitiveInfo } from "../../../model/individual.model"
import { PrivateRoutes } from '../../../model/routes'

import Button from '../../buttons/button'
import Text from '../../typography/typography'

import styles from './small.module.css'

interface Props {
    individual: SensitiveInfo,
}

const small = ({ individual }: Props) => {
    const navigate = useNavigate()

    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.text}`}>
                <Text type='h4' style_type='text-button' styles_color='text-primario' content={individual.name} />
                <Text type='h6' style_type='text-subtitle' styles_color='text-secundario' content={`${individual.credential}`} />
            </div>
            <div className={`flex ${styles.button}`}>
                <Button value={'Ver más'} onClick={() => navigate(`/Private/${PrivateRoutes.PREVIEW}/${individual.id}`, { replace: true })} />
            </div>
        </div>
    )
}

export default small