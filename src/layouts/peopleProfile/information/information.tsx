import { individual } from '../../../model/individual.model'
import * as Components from '../../../components'

import styles from './information.module.css'

interface Props {
    individual: individual
}

const information = ({ individual }: Props) => {
    const { name, credential, birthDate, schoolFinished, asJob } = individual

    return (
        <div className={`flex ${styles.container}`}>
            <Components.text type='h3' style_type='text-title' content='Información' />
            <div className={`flex ${styles.infoContainer}`}>
                <Components.text type='h4' style_type='text-button' content={`Nombre: ${name}`} />
                <Components.text type='h4' style_type='text-button' content={`Documento: ${credential}`} />
                <Components.text type='h4' style_type='text-button' content={`Fecha de nacimiento: ${birthDate}`} />
                <Components.text type='h4' style_type='text-button' content={`Escuela: ${schoolFinished ? 'si' : 'no'} `} />
                <Components.text type='h4' style_type='text-button' content={`Trabajo: ${asJob ? 'si' : 'no'}`} />
            </div>
        </div>
    )
}

export default information