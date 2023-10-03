import { Dispatch } from "@reduxjs/toolkit"
import alertaJovenAPI from "../../../api/alertaJovenAPI"
import { setIndividuals, startLoadingIndividuals } from "./individuals.slice"

const fetchIndividuals = () => {
    return async (dispatch: Dispatch) => {
        dispatch(startLoadingIndividuals())
        const { data } = await alertaJovenAPI.get('individuals')
        dispatch(setIndividuals({ individuals: data }))
    }
}

export default fetchIndividuals