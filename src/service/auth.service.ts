import alertaJovenAPI from "../api/alertaJovenAPI"

const loginWidthEmailAndPassword = async (email: string, password: string) => {
    try {
        const { data } = await alertaJovenAPI.post('users/login', { email, password })
        return data
    }
    catch (Error: any) {
        alert(Error.message)
    }
}

export default loginWidthEmailAndPassword