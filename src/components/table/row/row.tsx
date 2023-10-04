import { useNavigate } from "react-router-dom"

import { individual } from "../../../model/individual.model"
import { PrivateRoutes } from "../../../model/routes"

import Button from "../../buttons/button"
import Data from '../data/data'

interface Props {
    individual: individual
}

const row = ({ individual }: Props) => {

    const navigate = useNavigate()

    const { name, schoolFinished, credential, birthDate, asJob, id } = individual
    const data = [name, credential, birthDate, schoolFinished ? 'si' : 'no', asJob ? 'si' : 'no']

    return (
        <tr>
            {data.map((item, index) => <Data value={`${item}`} key={index} />)}
            <td className='flex' style={{ padding: '.5em .7em' }} >
                <Button value="Abrir" onClick={() => navigate(`/Private/${PrivateRoutes.PREVIEW}/${id}`, { replace: true })} />
            </td>
        </tr>
    )
}

export default row