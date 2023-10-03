import { MediumCardInfo } from "../../../model/individual.model"
import Button from "../../buttons/normal button/button"
import Text from "../../typography/typography"

import styles from './medium.module.css'

interface Props {
    individual: MediumCardInfo
}

const medium = ({ individual }: Props) => {

    const { name, credential, birthDate } = individual

    return (
        <div className={`flex ${styles.card}`}>
            <div className={`flex ${styles.text}`}>
                <div>
                    <Text type='h4' style_type='text-subtitle' content='Nombre:' />
                    <Text type='h4' style_type='text-p' content={name} styles_color="text-secundario" />
                </div>
                <div>
                    <Text type='h4' style_type='text-subtitle' content='Documento:' />
                    <Text type='h4' style_type='text-p' content={`${credential}`} styles_color="text-secundario" />
                </div>
                <div>
                    <Text type='h4' style_type='text-subtitle' content='Nacimiento:' />
                    <Text type='h4' style_type='text-p' content={birthDate} styles_color="text-secundario" />
                </div>
            </div>
            <div className={`grid ${styles.button}`}>
                <Button value="Ver más" />
            </div>
        </div>
    )
}

export default medium