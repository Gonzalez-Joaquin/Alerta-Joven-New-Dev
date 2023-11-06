import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import alertaJovenAPI from '../../../api/alertaJovenAPI'
import { PeopleProfile } from '../../../layouts'
import * as Components from '../../../components'
import styles from './preview.module.css'

import { individual } from '../../../model/individual.model'
import { tracking } from '../../../model/tracking.model'
import { course } from '../../../model/course.model'

const preview = () => {

    const [individual, setIndividual] = useState<individual>({ id: 0, name: "", credential: 0, birthDate: "", asJob: false, schoolFinished: false })
    const [trackings, setTrackings] = useState<tracking[]>()
    const [courses, setCourses] = useState<course[]>()
    const { id } = useParams()

    useEffect(() => {
        const fetchIndividual = async () => {
            const responseIndividual = await alertaJovenAPI.get(`individuals/${id}`)
            setIndividual(responseIndividual.data)
            const responseCourses = await alertaJovenAPI.get(`courses/${id}`)
            setCourses(responseCourses.data)
            const responseTrakings = await alertaJovenAPI.get(`trakings/${id}`)
            setTrackings(responseTrakings.data)
            console.log(responseTrakings.data)
        }
        fetchIndividual()
    }, [])

    return (
        <section className={`flex ${styles.section}`}>
            <article className={`flex ${styles.left}`}>
                <div className={styles.container}>
                    <PeopleProfile.information individual={individual} />
                </div>
                <div className={styles.container}>
                    {courses === undefined
                        ? <Components.text type='h3' style_type='text-button' content='No se encontro registro de cursos' styles_color='text-primario' />
                        : <PeopleProfile.courses courses={courses} />
                    }
                </div>
            </article>
            <article className={`flex ${styles.right}`}>
                <div className={styles.container}>
                    {trackings !== undefined && <PeopleProfile.trackings trackings={trackings} />}
                    {trackings === undefined && <Components.text type='h3' style_type='text-button' content='No se encontro seguimiento' styles_color='text-primario' />}
                </div>
            </article>
        </section>
    )
}

export default preview