import { useState } from 'react'

import * as Components from '../../../../components'
import * as Forms from '../form'

import ProgressBar from '../progressBar/progressBar'
import { FormSteps } from '../../../../types'

import styles from './newTracking.module.css'

const newTracking = () => {

    const [formStep, setFormStep] = useState<FormSteps>('individual')

    return (
        <div className={`flex ${styles.container}`}>
            <div className={`flex ${styles.popUp}`}>
                <Components.text type='h3' style_type='text-title' content='Nuevo seguimiento' />
                <ProgressBar formStep={formStep} />
                <div className={styles.forms}>
                    <Forms.individual value={e => setFormStep(e)} />
                    <Forms.course />
                    <Forms.tracking />
                </div>
            </div>
        </div>
    )
}

export default newTracking