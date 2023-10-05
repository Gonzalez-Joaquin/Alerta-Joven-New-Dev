import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { PeopleProfile } from '../../../layouts'
import styles from './preview.module.css'
import alertaJovenAPI from '../../../api/alertaJovenAPI'
import { individual } from '../../../model/individual.model'

const preview = () => {

    const [individual, setIndividual] = useState<individual>({ id: 0, name: "", credential: 0, birthDate: "", asJob: false, schoolFinished: false })
    const { id } = useParams()

    useEffect(() => {
        const fetchIndividual = async () => {
            const responseIndividual = await alertaJovenAPI.get(`individuals/${id}`)
            setIndividual(responseIndividual.data)
            const responseCourses = await alertaJovenAPI.get(`courses/${id}`)
            console.log(responseCourses.data)
            const responseTrakings = await alertaJovenAPI.get(`trakings/${id}`)
            console.log(responseTrakings.data)
        }
        fetchIndividual()
    }, [])

    return (
        <section className={`flex ${styles.section}`}>
            <article className={`flex ${styles.top}`}>
                <div className={styles.container}>
                    <PeopleProfile.information individual={individual} />
                </div>
                <div className={styles.container}>
                    <PeopleProfile.trakings />
                </div>
            </article>
            <article className={`flex ${styles.bottom}`}>
                <div className={styles.container}>
                    <PeopleProfile.courses />
                </div>
            </article>
        </section>
    )
}

export default preview