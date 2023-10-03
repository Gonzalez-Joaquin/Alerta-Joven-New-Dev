import styles from './small.module.css'
import { SensitiveInfo } from "../../../model/individual.model"
import Text from '../../typography/typography'
import Button from '../../buttons/normal button/button'

interface Props {
    individual: SensitiveInfo,
}

const small = ({ individual }: Props) => {
    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.text}`}>
                <Text type='h4' style_type='text-button' styles_color='text-primario' content={individual.name} />
                <Text type='h6' style_type='text-subtitle' styles_color='text-secundario' content={`${individual.credential}`} />
            </div>
            <div className={`flex ${styles.button}`}>
                <Button value={'ver'} />
            </div>
        </div>
    )
}

export default small