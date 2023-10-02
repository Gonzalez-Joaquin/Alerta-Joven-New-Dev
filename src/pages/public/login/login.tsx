import * as Components from '../../../components/index'
import { Forms } from '../../../layouts'
import styles from './login.module.css'

const Login = () => {
    return (
        <section className="section flex">
            <article className={`flex ${styles.article}`}>
                <div className={styles.left}>
                    <Components.text type='p' style_type='text-p' content={'A este sitio web solo puede acceder el personal autorizado'} size='text-medium' />
                </div>
                <div className={styles.rigth}>
                    <Forms.loginForm />
                </div>
            </article>
        </section>
    )
}

export default Login