import { useEffect, useState } from 'react'

import * as Components from '../../../components'
import styles from './dashboard.module.css'
import alertaJovenAPI from '../../../api/alertaJovenAPI'
import { user_model } from '../../../model/user.model'

const dashboard = () => {

    const [users, setUsers] = useState<user_model[]>([])

    useEffect(() => {
        const fetchIndividual = async () => {
            const responseUsers = await alertaJovenAPI.get(`users`)
            setUsers(responseUsers.data)
        }
        fetchIndividual()
    }, [])

    return (
        <section className="flex section">
            <article className={styles.left}>
                <Components.text type='h3' style_type='text-title' content='Panel administrativo' size='text-pre-medium' />
            </article>
            <article className={styles.right}>
                <Components.text type='h3' style_type='text-title' content='Usuarios Recientes' size='text-pre-medium' />
                <div className='flex' style={{ gap: '10px', flexDirection: 'column' }}>
                    {users.map(({ id, name, permissions }) => <Components.cards.small type='individual' data={{ id, title: name, desc: permissions }} key={id} />)}
                </div>
            </article>
            <div className={styles.new}>
                <Components.button value='Nuevo Usuario' />
            </div>
        </section>
    )
}

export default dashboard