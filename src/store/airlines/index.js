import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    dataAirlines: []
  }
}

const getters = {
  getDataAirlines: (state) => {
    return state.dataAirlines
  }
}

const mutations = {
  SET_AIRLANES: (state, payload) => {
    state.dataAirlines = payload
  }
}

const actions = {
  findDataAirlines: (context, payload) => {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/airlines/getall`).then(result => {
        context.commit('SET_AIRLANES', result.data.data)
      }).catch(err => {
        console.log(err)
      })
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
