export const baseURL = 'https://rickandmortyapi.com/api/'

const tempCharacter = baseURL + 'character/'

export const getMorty = () => {
    return fetch(tempCharacter + '2').then(res => res.json())
}

export default getMorty