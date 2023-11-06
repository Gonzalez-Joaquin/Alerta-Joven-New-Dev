import { useEffect, useState } from 'react'

import { individual } from '../../../model/individual.model'
import { tracking } from '../../../model/tracking.model'
import alertaJovenAPI from '../../../api/alertaJovenAPI'
import { user_model } from '../../../model/user.model'
import { course } from '../../../model/course.model'
import * as Components from '../../../components'
import * as Layouts from '../../../layouts'

import styles from './dashboard.module.css'

const dashboard = () => {

    const [users, setUsers] = useState<user_model[]>([])
    const [individuals, setIndividuals] = useState<individual[]>([])
    const [trackings, setTrackings] = useState<tracking[]>([])
    const [courses, setCourses] = useState<course[]>([])

    useEffect(() => {
        const fetchIndividual = async () => {
            const responseIndividuals = await alertaJovenAPI.get(`individuals`)
            setIndividuals(responseIndividuals.data)
            const responseUsers = await alertaJovenAPI.get(`users`)
            setUsers(responseUsers.data)
            const responseTrackings = await alertaJovenAPI.get('trakings')
            setTrackings(responseTrackings.data)
            const responseCourses = await alertaJovenAPI('courses')
            setCourses(responseCourses.data)
        }
        fetchIndividual()
    }, [])

    return (
        <section className="flex section">
            <article className={`flex ${styles.left}`}>
                <Layouts.Dashboard.individuals individuals={individuals} trackings={trackings} courses={courses} />
            </article>
            <article className={`flex ${styles.right}`}>
                <Layouts.Dashboard.users users={users} />
            </article>
            <div className={styles.new}>
                <Components.button value='Nuevo Usuario' />
            </div>
        </section>
    )
}

export default dashboard