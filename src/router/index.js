import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SplashScreen from '../views/SplashScreen.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Flight from '../views/Flight.vue'
import User from '../views/User.vue'
import MyBooking from '../views/MyBooking.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/home',
    name: 'Home',
    component: Home
    // meta: { requiresAuth: true }
  },
  {
    path: '/flight',
    name: 'Flight',
    component: Flight
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/mybooking',
    name: 'MyBooking',
    component: MyBooking
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
