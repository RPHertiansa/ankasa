<template>
  <div class="container text-center">
    <img src="../assets/img/illustration.png" alt="plane image" />
    <h3>Get Started</h3>
    <p class="small text-muted mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      Expedita accusantium, quo laboriosam soluta voluptates
      <span class="d-none d-md-block">
        aspernatur minus at possimus omnis blanditiis.</span>
    </p>
    <router-link to="/register">
      <b-button class="btn btn-block mb-4" variant="login">
        Create My Account
      </b-button>
    </router-link>
    <router-link to="/login">
      <a class="btn-sign btn-block p-2" >Sign In</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SplashScreen'
}
</script>

<style scoped>
.container {
  width: 40%;
}
.container img {
  width: 60%;
}
.container h3 {
  font-weight: bold;
  margin: 15px 0;
}
.btn-login {
  color: #fff;
  font-weight: bold;
  background-color: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  padding: 12px;
  border-radius: 10px;
}
.btn-login:hover {
  color: #fff;
}
.btn-sign {
  background-color: #fff;
  color: #2395ff;
  border: 1.5px solid #2395ff;
  border-radius: 8px;
}
@media (max-width: 768px) {
  .container {
    width: 60%;
  }
  .container img {
    width: 80%;
  }
}
@media (max-width: 576px) {
  .container {
    width: 80%;
  }
  .container img {
    width: 80%;
  }
}
</style>
