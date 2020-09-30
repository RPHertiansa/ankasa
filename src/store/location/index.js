import axios from 'axios'

const state = () => {
  return {
    locationData: null
  }
}
const getters = {
  getLocation: (state) => {
    return state.locationData
  }
}

const mutations = {
  SET_LOCATION: (state, payload) => {
    state.locationData = payload
  }
}

const actions = {
  getLocation (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3004/api/v1/location/getall').then(result => {
        context.commit('SET_LOCATION', result.data.data)
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
