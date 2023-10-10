import { useEffect, useState } from 'react'

import * as Components from '../../../../components'
import * as Forms from '../form'

import ProgressBar from '../progressBar/progressBar'
import { FormSteps } from '../../../../types'

import styles from './newTracking.module.css'

interface Props {
    popUpMode: boolean
    setPopUpMode: (mode: boolean) => void
}

const newTracking = ({ popUpMode, setPopUpMode }: Props) => {

    const [formStep, setFormStep] = useState<FormSteps>('individual')

    useEffect(() => {
        if (popUpMode === false) {
            setFormStep('individual')
        }
    }, [popUpMode])

    return (
        <div className={`flex ${styles.container} ${popUpMode ? styles.true : styles.false}`}>
            <div className={`flex ${styles.popUp}`}>
                <Components.text type='h3' style_type='text-title' content='Nuevo seguimiento' />
                <ProgressBar formStep={formStep} />
                <div className={styles.forms}>
                    <Forms.individual value={e => setFormStep(e)} formStep={formStep} setPopUp={mode => setPopUpMode(mode)} />
                    <Forms.tracking formStep={formStep} value={e => setFormStep(e)} />
                    <Forms.ending formStep={formStep} value={e => setFormStep(e)} setPopUp={mode => setPopUpMode(mode)} />
                </div>
            </div>
        </div>
    )
}

export default newTracking