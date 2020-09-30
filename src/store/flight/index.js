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
      axios.get(`${url}/flight/getall?from=${payload.locationFrom}&destination=${payload.locationTo}&depature=${payload.departure}&flighttype=${payload.flightType}&classflight=${payload.seatClass}&direct=${payload.direct}&transit=${payload.transit}&transit2=${payload.transit2}&luggage=${payload.luggage}&meal=${payload.flightMeal}&wifi=${payload.wifi}&departuretimeFrom=${payload.departureFrom}&departuretimeTo=${payload.departureTo}&timearrivedFrom=${payload.timeArrivedFrom}$timearrivedTo=${payload.timeArrivedTo}&airlines=${payload.airlines}`).then(result => {
        context.commit('SET_DATA_FLIGHT', result.data.data)
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
