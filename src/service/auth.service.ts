import axios from 'axios'

const baseURL = 'http://localhost:5000/'

const loginUrl = baseURL + 'users/login'

export const loginWidthEmailAndPassword = async (email: string, password: string) => {
    try {
        const response = await axios.post(loginUrl, { email, password })

        return response.data
    }
    catch (Error: any) {
        alert(Error.message)
    }
}

export default loginWidthEmailAndPassword