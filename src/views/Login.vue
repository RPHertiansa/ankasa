<template>
  <div class="login">
    <div class="row">
      <div class="left-side col-sm-6 d-none d-lg-block">
        <img src="../assets/img/illustrationWhite.png">
      </div>
      <div class="col-sm-4">
        <h3 class="mb-4">Welcome Back!</h3>
        <p class="small">Please Login with your personal info!</p>
        <form @submit.prevent="">
          <input type="text" class="form-control mb-3" placeholder="Email" />
          <input type="password" class="form-control" placeholder="Password" />
          <button type="submit" class="btn btn-primary">Login</button>
          <p class="small text-muted">Don't have an account? please,<router-link to="/register"> create a new one!</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
  .left-side {
    background-color:#2395FF;
    height: 100%;
  }
  .left-side img {
    margin: 10%;
  }
</style>
