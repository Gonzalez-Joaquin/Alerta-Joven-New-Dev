import { useSelector } from 'react-redux'
import * as Components from '../../components'
import styles from './peopleTracking.module.css'
import { RootState } from '../../redux/store'
import { useState } from 'react'

// En el objeto de abajo se colocan los headers de la tabla

const tableHeaders = ['Nombre', 'Documento', 'Nacimiento', 'Estudia', 'Trabaja']

const peopleTracking = () => {
    const { individuals } = useSelector((store: RootState) => store.individuals)

    const [currentPage, setCurrentPage] = useState(0)
    const newArray = (nextValue?: number) => {
        if (nextValue) {
            return individuals.slice(currentPage, nextValue + 9)
        } else {
            return individuals.slice(currentPage, currentPage + 9)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            {tableHeaders.map((header, index) => <Components.table.header value={header} key={index} />)}
                        </tr>
                    </thead>
                    <tbody>
                        {newArray().map((individual) => <Components.table.row individual={individual} key={individual.id} />)}
                    </tbody>
                </table>
            </div>
            <div className={`flex ${styles.buttons}`}>
                <Components.button icon='angle-left' onClick={() => setCurrentPage(currentPage - 9)}
                    disabled={currentPage === 0 ? true : false}
                />
                <Components.button icon='angle-right' onClick={() => setCurrentPage(currentPage + 9)}
                    disabled={currentPage + 9 > individuals.length ? true : false}
                />
            </div>
        </div>
    )
}

export default peopleTracking