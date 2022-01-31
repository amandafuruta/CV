import axios from 'axios'

const api = axios.create({
    baseURL: process.env.AXIOS_BASE_URL,
})

export { api }
