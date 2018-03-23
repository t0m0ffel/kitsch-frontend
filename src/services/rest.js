import axios from 'axios'

export default {
  login (username, password) {
    console.log(username, password)
    return axios.get('http://localhost:1338/login.json')
  }
}
