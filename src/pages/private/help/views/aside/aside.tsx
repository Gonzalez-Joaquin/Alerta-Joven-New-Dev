import * as Components from '../../../../../components'
import { informationShow } from '../../help'
import styles from './aside.module.css'

interface Props {
    value: informationShow,
    setValue: (value: informationShow) => void
}

const aside = ({ value, setValue }: Props) => {
    return (
        <aside className={`flex ${styles.aside}`}>
            <nav className={`flex ${styles.nav}`}>
                <ul className={`flex ${styles.ul}`}>
                    <li className={`${styles.li} ${value === 'first' && styles.active}`} onClick={() => setValue('first')}>
                        <Components.text type='h3' style_type='text-button' content='¿Qué es Alerta Joven?' styles_color='text-secundario' />
                    </li>
                    <li className={`${styles.li} ${value === 'second' && styles.active}`} onClick={() => setValue('second')}>
                        <Components.text type='h3' style_type='text-button' content='Seguimientos' styles_color='text-secundario' />
                    </li>
                    <li className={`${styles.li} ${value === 'third' && styles.active}`} onClick={() => setValue('third')}>
                        <Components.text type='h3' style_type='text-button' content='Cursos' styles_color='text-secundario' />
                    </li>
                    <li className={`${styles.li} ${value === 'foruth' && styles.active}`} onClick={() => setValue('foruth')}>
                        <Components.text type='h3' style_type='text-button' content='Registros' styles_color='text-secundario' />
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default aside