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
          <h3 class="mb-5">Register</h3>
          <form @submit.prevent="register">
            <input type="text" class="form-control mb-4" placeholder="Fullname" autofocus required v-model="registerName" />
            <input type="text" class="form-control mb-4" placeholder="Email" autofocus required v-model="registerEmail" />
            <input type="password" class="form-control mb-5" placeholder="Password" required v-model="registerPass" />
            <b-button type="submit" class="btn btn-block" variant="login">Sign Up</b-button>
            <b-form-checkbox class="mt-4 mb-3"><p class="small">I accept the terms and use</p> </b-form-checkbox>
            <hr />
            <p class="small text-muted text-center">Already have an account?</p>
            <router-link to="/login"><b-button class="btn-block mb-5" variant="outline-info">Sign In</b-button></router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/style.css"></style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      registerName: '',
      registerEmail: '',
      registerPass: ''
    }
  },
  methods: {
    ...mapActions({
      onRegister: 'auth/onRegister'
    }),
    register () {
      const data = {
        fullname: this.registerName,
        email: this.registerEmail,
        password: this.registerPass
      }
      this.onRegister(data).then(result => {
        alert(result)
        window.location = '/login'
      }).catch(err => alert(err))
    }
  }
}
</script>
