import { FormEvent, useState } from "react"
import Icon from '../icon/icon'
import styles from './search.module.css'

const search = () => {
    const [mode, setMode] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className={`flex ${styles.container}`} onSubmit={handleSubmit}>
            <input type="text" name="search" id="search" autoComplete="off" className={`${styles.input} ${mode ? styles.active : styles.inactive}`} />
            <button type="reset" onClick={() => setMode(!mode)} className={`${styles.button} ${mode ? styles.crossActive : styles.crossInactive}`}>
                {mode ? <Icon icon='cross' /> : <Icon icon='search' />}
            </button>
        </form>
    )
}

export default search