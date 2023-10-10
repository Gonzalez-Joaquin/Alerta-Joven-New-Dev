import { useEffect, useState } from "react"

import alertaJovenAPI from "../../../../api/alertaJovenAPI"
import { tracking } from "../../../../model/tracking.model"
import * as Components from '../../../../components'

import styles from './viewTracking.module.css'

interface Props {
    id: number
    mode: boolean,
    setMode: (mode: boolean) => void
}

const viewTracking = ({ id, mode, setMode }: Props) => {

    const [data, setData] = useState<tracking | undefined>(undefined)

    useEffect(() => {
        const getData = async () => {
            const data = await alertaJovenAPI.get(`trakings/find/${id}`)
            setData(data.data)
        }
        if (mode === true) {
            getData()
        }
    }, [mode])

    return (
        <div className={`flex ${styles.container} ${mode ? styles.true : styles.false}`}>
            {data !== undefined && (
                <div className={`flex ${styles.popUp}`}>
                    <div className={styles.crossBtton}>
                        <Components.button icon="cross" onClick={() => setMode(!mode)} />
                    </div>
                    <Components.text type="h3" style_type="text-title" content="Información de la causa:" />
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Titulo:" />
                        <Components.text type="h4" style_type="text-p" content={data.title} />
                    </div>
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Descipción:" />
                        <Components.text type="h4" style_type="text-p" content={data.desc} />
                    </div>
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Número de causa:" />
                        <Components.text type="h4" style_type="text-p" content={data.criminalCase} />
                    </div>
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Fecha:" />
                        <Components.text type="h4" style_type="text-p" content={data.date} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default viewTracking