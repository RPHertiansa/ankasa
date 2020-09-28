import axios from 'axios'

const actions = {
  findFlightData: (context, payload) => {
    return new Promise((resolve, reject) => {
      axios.get('http://127.0.0.1:3004/api/v1/flight/getall').then(result => {
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
