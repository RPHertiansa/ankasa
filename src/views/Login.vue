<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 d-none d-sm-block">
        <div class="img-left">
          <img src="../assets/img/illustrationWhite.png" />
        </div>
      </div>

      <div class="right-side col-sm-6">
        <div class="container">
          <h5 class="mt-3 mb-5">
            <img src="../assets/img/planeBlue.png" alt="logo" /> Ankasa
          </h5>
          <h3 class="mb-5">Login</h3>
          <form class="text-center" @submit.prevent="login">
            <input type="text" class="form-control mb-4" placeholder="Username" autofocus required v-model="form.loginUname" />
            <input type="password" class="form-control mb-5" placeholder="Password" required v-model="form.loginPass"/>
            <button type="submit" class="btn btn-block btn-login" >Sign In</button>
            <p class="small text-muted mt-3 mb-3">
              Did you forget your password? <br />
              <a class="text-primary" data-toggle="modal" data-target="#forgot-pass">Tap here for reset</a>
            </p>
            <ModalForgot />
            <hr />
            <p class="small text-muted">Or Sign in with</p>
            <b-button class="sign" variant="outline-info">
              <img src="../assets/img/google.png" alt="google" />
            </b-button>
            <b-button class="sign" variant="outline-info">
              <img src="../assets/img/fb.png" alt="facebook" />
            </b-button>
            <p class="small text-muted mt-4 mb-5">
              Don't have an account? please,
              <router-link to="/register">create a new one!</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/style.css"></style>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
import ModalForgot from '../component/ModalForgot'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        loginUname: '',
        loginPass: ''
      }
    }
  },
  components: {
    ModalForgot
  },
  methods: {
    ...mapActions({
      onLogin: 'auth/onLogin'
    }),
    login () {
      this.onLogin(this.form).then(result => {
        if (result === "Cannot read property 'password' of undefined") {
          this.alertExist()
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('iduser')
          localStorage.removeItem('username')
        } else if (result === 'Need Activation') {
          this.alertActivate()
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('iduser')
          localStorage.removeItem('username')
        } else if (result === 'Incorrect password! Please try again') {
          this.alertMatch()
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
          localStorage.removeItem('iduser')
          localStorage.removeItem('username')
        } else {
          window.location = '/'
        }
      }).catch(err => this.alertError(err.message))
    },
    alertExist () {
      Swal.fire({
        icon: 'error',
        title: 'Username Doesnt Exist!',
        text: 'Please check your personal info or create a new one'
      })
    },
    alertActivate () {
      Swal.fire({
        icon: 'warning',
        title: 'This Account need to verified!',
        text: 'Please check your email account to activate'
      })
    },
    alertMatch () {
      Swal.fire({
        icon: 'question',
        title: 'Username and Password Doesnt Match!'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  }
}
</script>
