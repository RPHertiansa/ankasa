import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    bookingHistory: []
  }
}

const getters = {
  getBookingHistory: (state) => {
    return state.bookingHistory
  }
}

const mutations = {
  SET_BOOKING: (state, payload) => {
    state.bookingHistory = payload
  }
}

const actions = {
  insertBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/transaction/booking`, {
        iduser: payload.iduser,
        idflight: payload.idflight,
        nationality: payload.nationality,
        insurance: payload.insurance,
        child: payload.child,
        adult: payload.adult,
        payment: payload.price
      }).then(result => {
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  getBookingData (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/transaction/bookingusers/${payload}`).then(result => {
        context.commit('SET_BOOKING', result.data.data)
        console.log(result.data.data)
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
