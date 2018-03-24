import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost/services/loginservice/api/',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
})

export default {
  login (credentials) {
    return http.post('login', credentials)
  }
}
