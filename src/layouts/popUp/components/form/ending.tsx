import { useDispatch } from 'react-redux'
import * as Components from '../../../../components'

import fetchIndividuals from '../../../../redux/slices/individuals/thunk'
import { AppDisptach } from '../../../../redux/store'
import { FormSteps } from '../../../../types'

import styles from './forms.module.css'

interface Props {
    formStep: FormSteps
    value: (newValue: FormSteps) => void
    setPopUp: (mode: boolean) => void
}

const ending = ({ formStep, value, setPopUp }: Props) => {

    const dispatch = useDispatch<AppDisptach>()

    const handleClick = () => {
        setPopUp(false)
        dispatch(fetchIndividuals())
    }

    return (
        <div className={`flex ${styles.form} ${formStep === 'end' ? styles.true : styles.false}`}>
            <div className={`flex ${styles.ending}`}>
                <Components.text type='h2' style_type='text-title' content='Nuevo individuo agregado!' styles_color='text-color-primario' />
                <Components.text type='p' style_type='text-p' content='Desea cerrar o agregar otro?' styles_color='text-secundario' />
            </div>
            <div className={`flex ${styles.buttons}`}>
                <Components.button value='Agregar otro' onClick={() => value('individual')} />
                <Components.button value='Cerrar' onClick={() => handleClick()} />
            </div>
        </div>
    )
}

export default ending