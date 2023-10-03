import { useState } from 'react'
import loginWidthEmailAndPassword from '../../../service/auth.service'

import * as Components from '../../../components'
import styles from './login_form.module.css'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../../redux/slices/user.slice'
import { useNavigate } from 'react-router-dom'

const loginForm = () => {

    const dipatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('nahun@gmail.com')
    const [password, setPassword] = useState('nahun123')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = await loginWidthEmailAndPassword(email, password)

        dipatch(updateUser(data))
        navigate('/', { replace: true })
    }

    return (
        <form className={`flex ${styles.form}`} onSubmit={handleSubmit}>
            <Components.text type='h4' style_type='text-button' content='Iniciar sesión' size='text-pre-medium' />
            <Components.input type='email' name='email' placeholder='Email' newValue={e => setEmail(e)} />
            <Components.input name='password' placeholder='Contraseña' type='password' newValue={e => setPassword(e)} />
            <Components.buttons.normal_button value='iniciar' type='submit' />
        </form>
    )
}

export default loginForm