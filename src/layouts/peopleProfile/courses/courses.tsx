import { course } from "../../../model/course.model"

interface Props {
    courses: course[]
}

const courses = ({ courses }: Props) => {
    return (
        <div>courses</div>
    )
}

export default courses