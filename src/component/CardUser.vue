<template>
  <div class="card-main mt-3">
    <div class="sub-card m-4">
      <form enctype="multipart/form-data" @change.prevent="update">
        <div class="text-center">
        <div class="user-profile"><img :src="`http://localhost:3004/${detailUser.image}`" alt="profile" class="rounded-circle mt-4"></div>
        <label class="custom-file-upload">
          <input type="file" @change="upload($event)"/>
          Select Photo
        </label>
        <h5>{{ detailUser.fullname }}</h5>
        <p class="small text-muted">{{ detailUser.address }}</p>
      </div>
      </form>
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
import Swal from 'sweetalert2'
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
      onDetail: 'user/onDetail',
      onUpdate: 'user/updateImage',
      onLogout: 'auth/onLogout'
    }),
    upload (event) {
      this.image = event.target.files[0]
    },
    update () {
      const data = {
        id: this.id,
        image: this.image
      }

      this.onUpdate(data).then((response) => {
        if (response.data.message === 'Image size is too big! Please upload another one with size <5mb') {
          this.alertSize()
        } else if (response.data.message === 'Image type must be JPG or JPEG') {
          this.alertValidation()
        } else {
          this.alertSuccess()
          window.location = '/user'
        }
      }).catch((err) => this.alertError(err))
    },
    logout () {
      this.onLogout().then(() => { window.location = '/' })
    },
    alertSuccess () {
      Swal.fire({
        icon: 'success',
        title: 'Image Updated'
      })
    },
    alertSize () {
      Swal.fire({
        icon: 'error',
        title: 'Image size is too big!',
        text: 'Please upload another one with size < 5mb'
      })
    },
    alertValidation () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Image type must be JPG or JPEG'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  },
  mounted () {
    this.onDetail(this.id)
  }
}
</script>

<style scoped>
input[type="file"] {
  display: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #FFFFFF;
  border: 1px solid #2395FF;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2395FF;
  margin-bottom: 15px;
}
.card-main {
  background-color: #fff;
  border-radius: 15px;
  width: 300px;
  height: 100%;
  margin: auto;
}
.user-profile img{
  width: 100px;
  height: 90px;
  border: 3px solid #2395FF;
  padding: 5px;
  margin-bottom: 15px;
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
@media (max-width: 1008px) {
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
