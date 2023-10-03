import { createSlice } from "@reduxjs/toolkit";
import { individual_model } from "../../../model/individual.model";

const initialState: individual_model = { loading: false, individuals: [] }

const individualSlice = createSlice({
    name: 'individual',
    initialState,
    reducers: {
        startLoadingIndividuals: (state) => {
            state.loading = true
        },
        endLoadingIndividuals: (state) => {
            state.loading = false
        },
        setIndividuals: (state, action) => {
            state.loading = false
            state.individuals = action.payload.individuals
        }
    }
})

export const { startLoadingIndividuals, endLoadingIndividuals, setIndividuals } = individualSlice.actions

export default individualSlice.reducer