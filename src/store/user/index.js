import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    detail: []
  }
}

const getters = {
  getDetail: (state) => state.detail
}

const mutations = {
  SET_DETAIL (state, payload) {
    state.detail = payload
  }
}

const actions = {
  // get detail data
  onDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/users/getDetail/${payload}`).then((response) => {
        context.commit('SET_DETAIL', response.data.data[0])
        resolve(response)
      }).catch((err) => reject(err))
    })
  },

  // update data user
  onUpdate (context, payload) {
    return new Promise((resolve, reject) => {
      axios.patch(`${url}/users/update/${payload.id}`, payload.form).then((response) => {
        resolve(response)
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
