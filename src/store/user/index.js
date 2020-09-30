import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    },
    detail: {
      data: []
    }
  }
}

const getters = {
  getAll: (state) => state.all,
  getDetail: (state) => state.detail
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.data = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  },
  GET_DETAIL (state, payload) {
    state.detail.data = payload
  }
}

const actions = {
  // get All data
  getAll (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/users/getall`).then((response) => {
        context.commit('SET_ALL_DATA', response.data.data)
      }).catch((err) => console.log(err)).finally(() => { context.commit('SET_ALL_LOADING', false) })
    })
  },

  // get detail data
  getDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/users/getDetail/${payload}`).then((response) => {
        context.commit('GET_DETAIL', response.data.data)
        resolve()
        console.log(response)
      }).catch((err) => reject(err))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
