import { FormSteps } from '../../../../types'
import styles from './progressBar.module.css'

interface Props {
    formStep: FormSteps
}

const progressBar = ({ formStep }: Props) => {
    return (
        <div className={`flex ${styles.progressBar}`}>
            <div className={`flex ${styles.bg}`}>
                <div className={styles.line}
                    style={{
                        width: formStep === 'individual'
                            ? '25%' : formStep === 'tracking'
                                ? '50%' : formStep === 'end'
                                    ? '75%' : '100%'
                    }}></div>
                <div className={`flex ${styles.circle} ${formStep === 'individual' || formStep === 'tracking' || formStep === 'end' || formStep === 'end' ? styles.active : ''}`}></div>
                <div className={`
                    flex 
                    ${styles.circle}
                    ${formStep === 'tracking' && styles.active}
                    ${formStep === 'end' && styles.active}
                `}></div>
                <div className={`flex ${styles.circle} ${formStep === 'end' && styles.active}`}></div>
            </div>
        </div>
    )
}

export default progressBar