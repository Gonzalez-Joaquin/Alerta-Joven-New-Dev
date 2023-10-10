import { useState } from 'react'

import * as Components from '../../../../components'
import { FormSteps } from '../../../../types'
import styles from './forms.module.css'


interface Props {
    formStep: FormSteps
    value: (newValue: FormSteps) => void
}

const tracking = ({ formStep, value }: Props) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [criminalCase, setCriminalCase] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(title, desc, criminalCase, date)
    }

    return (
        <form className={`flex ${styles.form} ${formStep === 'tracking' ? styles.true : styles.false}`} onSubmit={handleSubmit}>
            <div className={`flex ${styles.top}`}>
                <Components.text type='h3' style_type='text-title' content='Información del seguimiento' styles_color='text-secundario' />
                <div className={`flex ${styles.div}`}>
                    <Components.input placeholder='Titulo' name='newIndividualTrackginTtitle' newValue={e => setTitle(e)} />
                    <Components.input placeholder='Descripción' name='newIndividualTrackingDesc' newValue={e => setDesc(e)} />
                </div>
                <div className={`flex ${styles.div}`}>
                    <Components.input placeholder='Número de causa' name='newIndividualTrackingCriminalCase' newValue={e => setCriminalCase(e)} />
                    <Components.input placeholder='Fecha del hecho' name='newIndividualTrackingDate' newValue={e => setDate(e)} />
                </div>
            </div>
            <div className={`flex ${styles.buttons}`}>
                <Components.button value='Anterior' onClick={() => value('individual')} />
                <Components.button value='Siguiente' onClick={() => value('end')} />
            </div>
        </form>
    )
}

export default tracking