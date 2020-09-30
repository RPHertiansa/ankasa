import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import flight from './flight'
import location from './location'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    flight,
    location,
    user
  }
})
