export interface individual_model {
    loading: boolean,
    individuals: Array<individual>
}

export interface individual {
    id: number,
    name: string,
    credential: number,
    birthDate: string,
    schoolFinished: boolean,
    asJob: boolean
}

export type SensitiveInfo = Pick<individual, 'id' | 'name' | 'credential'>
export type MediumCardInfo = Omit<individual, 'id' | 'schoolFinished' | 'asJob'>