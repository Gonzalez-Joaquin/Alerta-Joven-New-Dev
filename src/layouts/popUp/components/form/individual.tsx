import { useState } from 'react'

import * as Components from '../../../../components'
import { FormSteps } from '../../../../types'
import styles from './forms.module.css'
import alertaJovenAPI from '../../../../api/alertaJovenAPI'
import fetchIndividuals from '../../../../redux/slices/individuals/thunk'


interface Props {
    formStep: FormSteps
    value: (newValue: FormSteps) => void
    setPopUp: (mode: boolean) => void
}

const individual = ({ formStep, value, setPopUp }: Props) => {

    const [name, setName] = useState('')
    const [doc, setDoc] = useState(0)
    const [date, setDate] = useState('')
    const [school, setSchool] = useState(false)
    const [job, setJob] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await alertaJovenAPI.post('individuals', { name, credential: doc, birthDate: date, schoolFinished: school, asJob: job })
        fetchIndividuals()
        value('tracking')
    }

    return (
        <form className={`flex ${styles.form} ${formStep === 'individual' ? styles.true : styles.false}`} onSubmit={handleSubmit}>
            <Components.text type='h3' style_type='text-title' content='Información personal' styles_color='text-secundario' />
            <div className={`flex ${styles.div}`}>
                <Components.input placeholder='Nombre Completo' moreInfo='( Nombre, Apellido )' name='newIndividualName' newValue={e => setName(e)} />
                <Components.input placeholder='Documento' name='newIndividualDocument' newValue={e => setDoc(+e)} limit={8} />
            </div>
            <div className={`flex ${styles.div}`} style={{ maxWidth: '280px' }}>
                <Components.input placeholder='Fecha de nacimiento' moreInfo='( Año - Mes - Día )' name='newIndividualDate' newValue={e => setDate(e)} />
            </div>
            <div className={`flex ${styles.div}`}>
                <Components.input placeholder='Escuela' name='newIndividualSchool' newValue={e => setSchool(e === 'si' ? true : false)} />
                <Components.input placeholder='Trabajo' name='newIndividualJob' newValue={e => setJob(e === 'si' ? true : false)} />
            </div>
            <div className={`flex ${styles.buttons}`}>
                <Components.button value='Cancelar' onClick={() => setPopUp(false)} />
                <Components.button type='submit' value='Siguiente' />
            </div>
        </form>
    )
}

export default individual