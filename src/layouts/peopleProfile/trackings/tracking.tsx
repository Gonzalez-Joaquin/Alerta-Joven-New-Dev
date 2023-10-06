import { tracking } from "../../../model/tracking.model"
import * as Components from '../../../components'

import styles from './tracking.module.css'
import { useState } from "react"

interface Props {
    trackings: tracking[]
}

const trackings = ({ trackings }: Props) => {
    const [currentPage, setCurrentPage] = useState(0)
    const listOfTrackings = () => trackings.slice(currentPage, currentPage + 4)

    return (
        <div className={`flex ${styles.container}`}>
            {listOfTrackings().map(({ id, title, desc }) => <Components.cards.small type="tracking" data={{ id, title, desc }} key={id} />)}
            <div className="flex" style={{ gap: '10px', justifyContent: 'flex-start', width: '100%' }}>

                <Components.button value="Bajar" icon="angle-down" onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage + 4 < trackings.length ? false : true}
                />
                <Components.button value="Subir" icon="angle-up" onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage + 4 > trackings.length || currentPage !== 0 ? false : true}
                />
            </div>
        </div>
    )
}

export default trackings