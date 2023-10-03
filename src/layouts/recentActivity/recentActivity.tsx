import { useSelector } from 'react-redux'

import * as Components from '../../components'
import { RootState } from '../../redux/store'

import styles from './recentActivity.module.css'

const recentActivity = () => {

    const { individuals, loading } = useSelector((store: RootState) => store.individuals)

    return (
        <div className={`flex ${styles.container}`}>
            {loading && (
                <>
                    loading individuals
                </>
            )}
            {!loading && (
                individuals.map(({ id, name, credential }) => <Components.cards.small individual={{ id, name, credential }} key={id} />)
            )}
        </div>
    )
}

export default recentActivity

