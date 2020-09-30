import axios from 'axios'
import { url } from '../../helper/env'

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
  }
}

export default {
  namespaced: true,
  actions
}
