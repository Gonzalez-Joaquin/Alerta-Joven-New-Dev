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
            <div className={`flex ${styles.insideContainer}`}>
                <div className={`flex ${styles.information}`}>
                    <div className={`flex ${styles.informationItem}`}>
                        <div className='flex' style={{ gap: '10px' }}>
                            <Components.text type='h3' style_type='text-button' content={`Nombre:`} />
                            <Components.text type='h4' style_type='text-p' content={`${name}`} />
                        </div>
                        <div className='flex' style={{ gap: '10px' }}>
                            <Components.text type='h3' style_type='text-button' content={`Documento:`} />
                            <Components.text type='h4' style_type='text-p' content={`${credential}`} />
                        </div>
                    </div>
                    <div className='flex' style={{ gap: '10px' }}>
                        <Components.text type='h3' style_type='text-button' content={`Fecha de nacimiento:`} />
                        <Components.text type='h4' style_type='text-p' content={`${birthDate}`} />
                    </div>
                    <div className={`flex ${styles.informationItem}`}>
                        <Components.text type='h4' style_type='text-button' content={`Escuela: ${schoolFinished ? 'Si' : 'No'} `} />
                        <Components.text type='h4' style_type='text-button' content={`Trabajo: ${asJob ? 'Si' : 'No'}`} />
                    </div>
                </div>
                <div className={`flex ${styles.buttons}`}>
                    <Components.button value='Borrar' />
                    <Components.button value='Editar' />
                </div>
            </div>
        </div>
    )
}

export default information