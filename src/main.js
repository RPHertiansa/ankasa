import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
<<<<<<< HEAD
import VueSweetalert2 from 'vue-sweetalert2'
=======
import axios from 'axios'
import { url } from './helper/env'
>>>>>>> 960926f70ccbab4b6ec8b312fe073c40c3ad1d95

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
<<<<<<< HEAD
Vue.use(VueSweetalert2)
=======
axios.defaults.headers = {
  token: localStorage.getItem('token')
}

// handle token expired
axios.interceptors.response.use((response) => {
  if (response.message === 'Token Expired! Please log in again') {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/users/refreshToken`, {
        refreshToken: localStorage.getItem('refreshToken')
      }).then(res => {
        resolve()
        localStorage.setItem('token', res.data.data.newToken)
        console.log(res.data.data.newToken)
        window.location = '/flight'
      }).catch(err => reject(err.message))
    })
  } else {
    return response
  }
})
>>>>>>> 960926f70ccbab4b6ec8b312fe073c40c3ad1d95

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
