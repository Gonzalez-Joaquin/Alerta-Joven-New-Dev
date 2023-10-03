import axios from 'axios'

const alertaJovenAPI = axios.create({
    baseURL: 'http://localhost:5000/'
})

export default alertaJovenAPI