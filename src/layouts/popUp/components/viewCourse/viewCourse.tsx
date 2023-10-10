import { useEffect, useState } from "react"

import alertaJovenAPI from "../../../../api/alertaJovenAPI"
import * as Components from '../../../../components'
import { course } from "../../../../model/course.model"

import styles from './viewCourse.module.css'

interface Props {
    id: number
    mode: boolean,
    setMode: (mode: boolean) => void
}

const viewCourse = ({ id, mode, setMode }: Props) => {

    const [courseData, setCourseData] = useState<course | undefined>(undefined)

    useEffect(() => {
        const getData = async () => {
            const data = await alertaJovenAPI.get(`courses/find/${id}`)
            setCourseData(data.data)
        }
        if (mode === true) {
            getData()
        }
    }, [mode])

    return (
        <div className={`flex ${styles.container} ${mode ? styles.true : styles.false}`}>
            {courseData !== undefined && (
                <div className={`flex ${styles.popUp}`}>
                    <div className={styles.crossBtton}>
                        <Components.button icon="cross" onClick={() => setMode(!mode)} />
                    </div>
                    <Components.text type="h3" style_type="text-title" content="Información del curso:" />
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Nombre:" />
                        <Components.text type="h4" style_type="text-p" content={courseData.name} />
                    </div>
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Descripción:" />
                        <Components.text type="h4" style_type="text-p" content={courseData.desc} />
                    </div>
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Comenzado:" />
                        <Components.text type="h4" style_type="text-p" content={courseData.startDate} />
                    </div>
                    <div>
                        <Components.text type="h4" style_type="text-subtitle" content="Terminado:" />
                        <Components.text type="h4" style_type="text-p" content={courseData.endDate} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default viewCourse