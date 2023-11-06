import styles from './input.module.css'

interface Props {
    type?: 'text' | 'password' | 'email'
    name: string
    placeholder: string
    moreInfo?: string
    newValue: (value: string) => void
}

const input = ({ name, placeholder, type, newValue }: Props) => {
    return (
        <div className={styles.container}>
            <label htmlFor={name} className={styles.label}>{placeholder}</label>
            <input type={type || 'text'} id={name} name={name} autoComplete='off' className={styles.input} onChange={(e) => newValue(e.target.value)} />
        </div>
    )
}

export default input