import * as Componnents from '../../components'
import { useSelector } from 'react-redux'
import styles from './newTrackings.module.css'
import { RootState } from '../../redux/store'

const newTrackings = () => {

    const { individuals, loading } = useSelector((store: RootState) => store.individuals)

    return (
        <div className={`flex ${styles.container}`}>
            {loading && (
                <>
                    Loading...
                </>
            )}
            {!loading &&
                individuals.map(({ id, name, credential, birthDate }) => <Componnents.cards.medium individual={{ name, credential, birthDate }} key={id} />)
            }
        </div>
    )
}

export default newTrackings