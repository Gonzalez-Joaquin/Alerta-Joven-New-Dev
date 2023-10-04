import { useSelector } from 'react-redux'
import * as Components from '../../components'
import styles from './peopleTracking.module.css'
import { RootState } from '../../redux/store'

// En el objeto de abajo se colocan los headers de la tabla

const tableHeaders = ['Nombre', 'Documento', 'Nacimiento', 'Estudia', 'Trabaja']

const peopleTracking = () => {
    const { individuals } = useSelector((store: RootState) => store.individuals)

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        {tableHeaders.map((header, index) => <Components.table.header value={header} key={index} />)}
                    </tr>
                </thead>
                <tbody>
                    {individuals.map((individual) => <Components.table.row individual={individual} key={individual.id} />)}
                </tbody>
            </table>
        </div>
    )
}

export default peopleTracking