import Router from '@/router/index'
import Rest from './rest'

export default {

  authenticated: false,

  async login (username, password, redirect) {
    const {data, error} = await Rest.login(username, password)
    if (error) {
      throw error
    }
    console.log(data)
    localStorage.setItem('user', JSON.stringify(data))
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
