<template>
  <div class="card-main mt-3">
    <div class="sub-card m-4">
      <div class="text-center">
        <div class="user-profile"><img :src="`http://localhost:3004/${detailUser.image}`" alt="profile" class="rounded-circle mt-4"></div>
        <b-button variant="outline-info" class="btn-photo d-none d-sm-block btn-sm">Select Photo</b-button>
        <h5>{{ detailUser.fullname }}</h5>
        <p class="small text-muted">{{ detailUser.address }}</p>
      </div>
        <b-row>
            <b-col><b>Card</b></b-col>
            <b-col><p class="text-info text-right">+ Add</p></b-col>
          </b-row>
        <div class="mini-card">
          <b>4441 1235 5512 5551</b>
          <b-row>
            <b-col><p>X Card</p></b-col>
            <b-col><p class="text-right">$ 1,440.2</p></b-col>
          </b-row>
        </div>

        <div class="menu">
          <ul>
            <li class="text-primary">
              <router-link to="/user"> <b-icon-person-circle class="mr-3"></b-icon-person-circle> Profile
              </router-link>
            </li>
            <li> <b-icon-star-fill class="text-secondary mr-3"></b-icon-star-fill> My Review</li>
            <li> <b-icon-gear-fill class="text-secondary mr-3"></b-icon-gear-fill> Settings</li>
            <li class="text-danger" @click="logout()"> <b-icon-box-arrow-right class="mr-3"></b-icon-box-arrow-right>Logout</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CardUser',
  data () {
    return {
      id: localStorage.getItem('iduser')
    }
  },
  computed: {
    ...mapGetters({
      detailUser: 'user/getDetail'
    })
  },
  methods: {
    ...mapActions({
      getDetail: 'user/getDetail',
      onLogout: 'auth/onLogout'
    }),
    logout () {
      this.onLogout().then(() => { window.location = '/' })
    }
  },
  mounted () {
    this.getDetail(this.id)
  }
}
</script>

<style scoped>
.card-main {
  background-color: #fff;
  border-radius: 15px;
  width: 300px;
  height: 100%;
  margin: auto;
}
.user-profile img{
  width: 30%;
  height: 30%;
  border: 3px solid #2395FF;
  padding: 5px;
}
.btn-photo {
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
h5 {
  font-weight: bolder;
}
p {
  font-size: 12px;
}
.mini-card {
  background-color: #2395FF;
  color: #fff;
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
  padding: 15px;
}
.mini-card b {
  letter-spacing: 2.3px;
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
@media (max-width: 768px) {

}
@media (max-width: 576px) {
  .card-main {
    width: 400px;
  }
  .user-profile img {
    margin-bottom: 15px;
  }
  .mini-card b {
    letter-spacing: 4px;
  }
}
</style>
