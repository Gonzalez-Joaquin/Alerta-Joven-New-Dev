import { useEffect, useState } from "react"

import { individual } from "../../../model/individual.model"
import { tracking } from "../../../model/tracking.model"
import { course } from "../../../model/course.model"
import checkAge from "./utils/checkAge"
import CardMedium from "./components/card medium/cardMedium"
import Card from "./components/card/card"

import styles from './individuals.module.css'


interface Props {
    individuals: individual[]
    trackings: tracking[]
    courses: course[]
}

const individuals = ({ individuals, trackings, courses }: Props) => {

    const [younger, setYounger] = useState(0)

    useEffect(() => {
        setYounger(0)
        individuals.map((individual) => {
            if (checkAge(individual.birthDate)) {
                setYounger(younger + 1)
            }
        })
    }, [individuals])

    return (
        <div className={`flex ${styles.container}`}>
            <div className={`flex ${styles.stats}`}>
                <h3>Resumen</h3>
                <div className={`flex ${styles.statsContainer}`}>
                    {/* Individuos */}
                    <Card title="Casos de seguimiento" icon="users-alt" value={individuals.length} />
                    {/* Cursos */}
                    <Card title="Cursos" icon="graduation-cap" value={courses.length} />
                    {/* Trackings */}
                    <Card title="Casos delictivos" icon="stats" value={trackings.length} />
                    {/* Menores a 18 años */}
                    <Card title="Menores de edad" icon="user" value={younger} />
                </div>
            </div>
            <div className={`flex ${styles.stats2}`}>
                <h3>Grafica</h3>
                <CardMedium />
            </div>
        </div>
    )
}

export default individuals