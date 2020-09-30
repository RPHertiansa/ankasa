import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    bookingHistory: [],
    boDetail: []
  }
}

const getters = {
  getBookingHistory: (state) => {
    return state.bookingHistory
  },
  getBoDetail: (state) => {
    return state.boDetail
  }
}

const mutations = {
  SET_BOOKING: (state, payload) => {
    state.bookingHistory = payload
  },
  SET_BO_DETAIL: (state, payload) => {
    state.boDetail = payload
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
        resolve(result.data.message)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  getBookingData (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/transaction/bookingusers/${payload}`).then(result => {
        context.commit('SET_BOOKING', result.data.data)
        resolve(result.data.message)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  getDetailBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/transaction/bookingdetail/${payload}`).then(result => {
        context.commit('SET_BO_DETAIL', result.data.data[0])
        localStorage.setItem('bodetail', JSON.stringify(result.data.data[0]))
        resolve(result.data.message)
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
