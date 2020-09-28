import axios from 'axios'

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
      axios.get('http://127.0.0.1:3004/api/v1/flight/getall').then(result => {
        context.commit('SET_DATA_FLIGHT', result.data.data)
      }).catch(err => {
        reject(err)
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
