import axios from 'axios'

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
        .post('http://localhost:3000/api/v1/users/register', payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  onLogin (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:3000/api/v1/users/login', {
          username: payload.loginUname,
          password: payload.loginPass
        })
        .then(result => {
          localStorage.setItem('token', result.data.data.token)
          localStorage.setItem('refreshToken', result.data.data.refreshToken)
          resolve(result.data.message)
          console.log(result.data.data.refreshToken)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  onLogout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
