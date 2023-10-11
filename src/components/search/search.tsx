import { useEffect, useState } from "react"
import Icon from '../icon/icon'
import styles from './search.module.css'

interface Props {
    searchValue: (value: string) => void
}

const search = ({ searchValue }: Props) => {
    const [mode, setMode] = useState(false)
    const [value, setValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setValue('')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            searchValue(value)
        }, 350)

        return () => clearTimeout(timer)
    }, [value])

    return (
        <form className={`flex ${styles.container}`} onSubmit={handleSubmit}>
            <input type="text" name="search" id="search" autoComplete="off"
                className={`${styles.input} ${mode ? styles.active : styles.inactive}`}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="reset" onClick={() => {
                setMode(!mode)
                searchValue('')
            }} className={`${styles.button} ${mode ? styles.crossActive : styles.crossInactive}`}>
                {mode ? <Icon icon='cross' /> : <Icon icon='search' />}
            </button>
        </form>
    )
}

export default search