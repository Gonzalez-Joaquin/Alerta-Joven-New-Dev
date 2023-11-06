import { user_model } from "../../../model/user.model"

import * as Components from '../../../components'
import Card from './components/card'
import styles from './users.module.css'

interface Props {
    users: user_model[]
}

const users = ({ users }: Props) => {
    return (
        <div className={styles.container}>
            <Components.text type="h3" style_type="text-title" content="Usuarios recientes: " styles_color="text-secundario" />
            <div className={styles.users}>
                {users.slice(0, 9).map(({ id, name, credentials }) => <Card data={{ id, title: name, desc: `${credentials}` }} key={id} />)}
            </div>
        </div>
    )
}

export default users