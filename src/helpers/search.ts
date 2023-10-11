import { individual } from "../model/individual.model";

const searchByName = (search: string, allIndividuals: individual[]): individual[] => {
    return search === ''
        ? allIndividuals
        : allIndividuals.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))
}

export default searchByName