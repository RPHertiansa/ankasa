<template>
  <div>
    <b-modal id="forgot-pass" hide-footer="true" hide-header="true">
      <h5 class="text-center mb-5">
        <img src="../assets/img/planeBlue.png" alt="logo" /> Ankasa
      </h5>
      <p class="small text-muted text-center mt-3">
        Forgot your password? Please, enter your email here!
        <br />
        You'll get message soon to create a new password
      </p>
      <form class="text-center" @submit.prevent="forgotPassword">
        <input type="text" class="form-control" placeholder="Email" autofocus required v-model="forgotEmail" />
        <button type="submit" class="btn btn-block btn-login">Send</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ModalForgot',
  data () {
    return {
      forgotEmail: ''
    }
  },
  methods: {
    ...mapActions({
      onForgotPassword: 'auth/onForgotPassword'
    }),
    forgotPassword () {
      const data = {
        email: this.forgotEmail
      }
      this.onForgotPassword(data).then(result => {
        alert(result)
        window.location = '/forgot'
      }).catch(err => alert(err))
    }
  }
}

</script>
<style scoped>
h5 img {
  width: 5%;
}
input[type="text"] {
  margin: 5% auto 0 auto;
  width: 80%;
}
.btn-login {
  width: 80%;
  margin: 5% auto 0 auto;
  color: #fff;
  font-weight: bold;
  background-color: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  margin: 25px auto;
}
</style>
