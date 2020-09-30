import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}
const actions = {
  onRegister (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/users/register`, payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onLogin (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/users/login`, {
          username: payload.loginUname,
          password: payload.loginPass
        })
        .then(result => {
          localStorage.setItem('token', result.data.data.token)
          localStorage.setItem('refreshToken', result.data.data.refreshToken)
          localStorage.setItem('iduser', result.data.data.iduser)
          localStorage.setItem('username', result.data.data.username)
          console.log(result)
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onLogout (context) {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('iduser')
      localStorage.removeItem('searchdata')
      localStorage.removeItem('username')
      resolve()
    })
  },
  onForgotPassword (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/users/ForgotPassword`, payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => reject(err.message))
    })
  },
  onResetPassword (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/users/newPassword/${payload.userkey}`, {
          password: payload.password
        })
        .then(result => {
          resolve(result)
        })
        .catch(err => reject(err.message))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
