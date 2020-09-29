import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    dataFlight: []
  }
}

const getters = {
  getDataFlight: (state) => {
    return state.dataFlight
  }
}

const mutations = {
  SET_DATA_FLIGHT: (state, payload) => {
    state.dataFlight = payload
  }
}

const actions = {
  findFlightData: (context, payload) => {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/flight/getall`).then(result => {
        context.commit('SET_DATA_FLIGHT', result.data.data)
        console.log(result)
      }).catch(err => {
        reject(err)
      })
    })
  },
  searchFlightData: (context, payload) => {
    return new Promise((resolve, reject) => {
      axios.get()
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
