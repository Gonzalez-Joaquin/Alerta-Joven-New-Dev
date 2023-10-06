import { useSelector } from 'react-redux'

import * as Components from '../../components'
import { RootState } from '../../redux/store'

import styles from './recentActivity.module.css'

const recentActivity = () => {

    const { individuals, loading } = useSelector((store: RootState) => store.individuals)

    const newArray = individuals.slice(0, 6)

    return (
        <div className={`flex ${styles.container}`}>
            {loading && (
                <>
                    Loading...
                </>
            )}
            {!loading && (
                newArray.map(({ id, name, credential }) => <Components.cards.small type='individual' data={{ id, title: name, desc: `${credential}` }} key={id} />)
            )}
        </div>
    )
}

export default recentActivity

