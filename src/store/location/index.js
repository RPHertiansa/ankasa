import axios from 'axios'
import { url } from '../../helper/env'

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
      axios.get(`${url}/location/getall`).then(result => {
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
