import { useState } from 'react'

import * as Components from '../../../../components'
import { FormSteps } from '../../../../types'
import styles from './forms.module.css'


interface Props {
    formStep: FormSteps
    value: (newValue: FormSteps) => void
    setPopUp: (mode: boolean) => void
}

const individual = ({ formStep, value, setPopUp }: Props) => {

    const [name, setName] = useState('')
    const [doc, setDoc] = useState(0)
    const [date, setDate] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name, doc, date)
    }

    return (
        <form className={`flex ${styles.form} ${formStep === 'individual' ? styles.true : styles.false}`} onSubmit={handleSubmit}>
            <Components.text type='h3' style_type='text-title' content='Información personal' styles_color='text-secundario' />
            <div className={`flex ${styles.div}`}>
                <Components.input placeholder='Nombre' name='newIndividualName' newValue={e => setName(e)} />
                <Components.input placeholder='Documento' name='newIndividualDocument' newValue={e => setDoc(+e)} />
            </div>
            <div className={`flex ${styles.div}`} style={{ maxWidth: '280px' }}>
                <Components.input placeholder='Fecha de nacimiento:' name='newIndividualDate' newValue={e => setDate(e)} />
            </div>
            <div className={`flex ${styles.div}`}>
                <Components.input placeholder='Escuela' name='newIndividualSchool' newValue={e => setName(e)} />
                <Components.input placeholder='Trabajo' name='newIndividualJob' newValue={e => setDoc(+e)} />
            </div>
            <div className={`flex ${styles.buttons}`}>
                <Components.button value='Cancelar' onClick={() => setPopUp(false)} />
                <Components.button value='Siguiente' onClick={() => value('tracking')} />
            </div>
        </form>
    )
}

export default individual