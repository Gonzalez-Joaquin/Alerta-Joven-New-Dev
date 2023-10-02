import { useState } from 'react'
import * as Components from '../../../components'

import styles from './login_form.module.css'

const loginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('submit' + username + password)
    }

    return (
        <form className={`flex ${styles.form}`} onSubmit={handleSubmit}>
            <Components.text type='h4' style_type='text-button' content='Iniciar sesión' size='text-pre-medium' />
            <Components.input name='username' placeholder='Nombre de usuario' newValue={e => setUsername(e)} />
            <Components.input name='password' placeholder='Contraseña' type='password' newValue={e => setPassword(e)} />
            <Components.buttons.normal_button value='iniciar' type='submit' />
        </form>
    )
}

export default loginForm