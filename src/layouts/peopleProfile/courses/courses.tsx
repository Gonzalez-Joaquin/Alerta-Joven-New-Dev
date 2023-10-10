import { useState } from 'react'
import * as Components from '../../../components'
import { course } from "../../../model/course.model"

import styles from './courses.module.css'

interface Props {
    courses: course[]
}

const courses = ({ courses }: Props) => {

    const [currentPage, setCurrentPage] = useState(0)

    const getAllCourses = (): Array<course> => {
        return courses.slice(currentPage, currentPage + 3)
    }

    return (
        <div className={`flex ${styles.container}`}>
            <Components.text type='h3' style_type='text-title' content='Cursos Realizados' />
            <div className={`flex ${styles.slider}`}>
                {courses.length === 0 && <Components.text type='h3' style_type='text-button' content='No se encontro registro de cursos' styles_color='text-primario' />}
                {
                    getAllCourses().map(({ name, id, desc, endDate }) => <Components.cards.medium data={{ id, title: name, desc, endDate }} key={id} />)
                }
            </div>
            {courses.length > 3 && (
                <div className={`flex ${styles.sliderButtons}`}>
                    <Components.button value='Anterior' onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage - 1 >= 0 ? false : true}
                    />
                    <Components.button value='Siguiente' onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage + 3 < courses.length ? false : true}
                    />
                </div>
            )}
        </div>
    )
}

export default courses