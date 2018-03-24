import Router from '@/router/index'
import Rest from './rest'

export default {

  authenticated: false,

  async login (username, password, redirect) {
    try {
      const {data, error} = await Rest.login({username, password})
      console.log(data, error)
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data))
    } catch ({response}) {
      console.log(response.data)
      return response.data.msg
    }
    if (redirect) { Router.push(redirect) }
  },

  logout () {
    localStorage.removeItem('user')
    Router.push('/')
  },

  isLoggedIn () {
    return localStorage.getItem('user')
  }
}
