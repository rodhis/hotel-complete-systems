import axios from 'axios'

const http = axios.create({
    baseURL: `http://localhost:4000/api`,
})

export const api = {
    get: (endpoint) => http.get(endpoint),
    post: (endpoint, body) => http.post(endpoint, body),
    put: (endpoint, body) => http.post(endpoint, body),
}
