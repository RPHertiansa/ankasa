<template>
  <div class="container mt-3">
    <div>
      <b-card class="card-left">
        <b-card-text class="text-center">
          <div class="user-profile"><img src="../assets/img/bigProfile.png" alt="profile" class="rounded-circle"></div>
          <b-button variant="outline-info" class="btn-photo d-none d-sm-block btn-sm">Select Photo</b-button>
          <h5>Mike Kowalski</h5>
          <p class="small text-muted">Medan, Indonesia</p>
        </b-card-text>
        <div>
          <p><b>Card</b> <label class="text-info">+ Add</label></p>
          <b-card class="mini-card">
            <b>4441 1235 5512 5551</b>
            <b-row>
              <b-col align-self="start"><p>X Card</p></b-col>
              <b-col align-self="end"><p>$ 1,440.2</p></b-col>
            </b-row>
          </b-card>

          <div class="menu">
            <ul>
              <li class="text-primary">
                <router-link to="/mybooking"> <b-icon-person-circle class="mr-3"></b-icon-person-circle> Profile
                </router-link>
              </li>
              <li> <b-icon-star-fill class="text-secondary mr-3"></b-icon-star-fill> My Review</li>
              <li> <b-icon-gear-fill class="text-secondary mr-3"></b-icon-gear-fill> Settings</li>
              <li class="text-danger" @click="logout()"> <b-icon-box-arrow-right class="mr-3"></b-icon-box-arrow-right>Logout</li>
            </ul>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CardUser',
  methods: {
    ...mapActions({
      onLogout: 'auth/onLogout'
    }),
    logout () {
      this.onLogout().then(() => { window.location = '/' })
    }
  }
}
</script>

<style scoped>
.card-left {
  background-color: #fff;
  border-radius: 15px;
  width: 300px;
  height: 610px;
  margin-bottom: 15px;
}
.user-profile img{
  width: 30%;
  height: 30%;
  border: 3px solid #2395FF;
}
.btn-photo {
  border-radius: 10px;
  font-weight: bold;
  padding: 6px;
  margin: 20px auto;
}
h5 {
  font-weight: bold;
}
p {
  font-size: 12px;
}
.mini-card {
  background-color: #2395FF;
  color: #fff;
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
}
.mini-card b {
  letter-spacing: 1.5px;
}
.mini-card p {
  color: #AEFAFF;
}
.menu ul li{
  margin-top: 20px;
  list-style: none;
  font-weight: bold;
  cursor: pointer;
}
@media (max-width: 576px) {
  .card-left {
    width: 250px;
    height: 550px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  .mini-card b {
    letter-spacing: 0.5px;
  }
}
</style>
