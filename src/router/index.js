import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SplashScreen from '../views/SplashScreen.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPass from '../views/ForgotPass.vue'
import Flight from '../views/Flight.vue'
import FlightDetail from '../views/FlightDetail.vue'
import User from '../views/User.vue'
import MyBooking from '../views/MyBooking.vue'
import BookingDetail from '../views/BookingDetail.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/splash',
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot',
    name: 'ForgotPass',
    component: ForgotPass
  },
  {
    path: '/flight',
    name: 'Flight',
    component: Flight,
    meta: { requiresAuth: true }
  },
  {
    path: '/flightdetail',
    name: 'FlightDetail',
    component: FlightDetail
    // meta: { requiresAuth: true }
  },
  {
    path: '/user',
    name: 'User',
    component: User
    // meta: { requiresAuth: true }
  },
  {
    path: '/mybooking',
    name: 'MyBooking',
    component: MyBooking
    // meta: { requiresAuth: true }
  },
  {
    path: '/bookingdetail',
    name: 'BookingDetail',
    component: BookingDetail
    // meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogin']) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
