import * as Components from '../../../components'
import styles from './welcome.module.css'

// 'Colocar en la variable de abajo el text de la página principal

const text: string = `Por un futuro mejor, y sin delincuencia!`

const Welcome = () => {
    return (
        <section className='section flex'>
            <article className={`flex ${styles.article}`}>
                <Components.text type='h1' style_type='text-title' content='Alerta Joven' size='text-large' />
                <Components.text type='p' style_type='text-p' content={text} size='text-medium' />
            </article>
            <article className={`flex ${styles.article2}`}>
                <div className={styles.containerSvg}>
                    <img src='./svg/welcome.svg' className={styles.welcomeSvg} />
                </div>
            </article>
        </section>
    )
}

export default Welcome