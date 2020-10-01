<template>
  <div class="flight-detail">
    <Navbar />
    <Header type="flight-detail" />
  <form @submit.prevent="booking">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h4 class="text-white font-weight-bold sub-title mb-4">
          Contact Person Details
        </h4>
        <div class="row info-panel">
          <div class="col-sm">
            <label class="text-muted">Full Name</label>
            <input type="text" class="form-control mb-4" v-model="userData.fullname"/>
            <label class="text-muted">Email</label>
            <input type="text" class="form-control mb-4" v-model="userData.email"/>
            <label class="text-muted">Phone Number</label>
            <input type="text" class="form-control mb-4" v-model="userData.phonenumber" required/>
            <b-alert variant="danger" show>
              <b-icon-exclamation-triangle-fill class="mr-2"></b-icon-exclamation-triangle-fill>
              Make sure the customer data is correct
            </b-alert>
          </div>
        </div>
      </div>
      <div class="flight-card col-sm-4">
        <h4 class="font-weight-bold sub-title mb-4">
          Flight Details
        </h4>
        <div class="info-flight">
          <img :src="`http://54.164.193.160:3000/${bookingData.imgplane}`" alt="logo-garuda" />
          <b class="text-muted ml-5">{{bookingData.nameplane}}</b>
          <div class="route-way-detail">
            <div class="from-title">
              <p class="font-weight-bold">{{searchData.locationFrom}} ({{searchData.countryfrom}})</p>
            </div>
            <img src="../assets/img/greysmallplane.png" alt="gray-small-plane"/>
            <div class="from-title">
              <p class="font-weight-bold">{{searchData.locationTo}} ({{searchData.countyto}})</p>
            </div>
          </div>
            <p class="small text-muted">
              {{searchData.departure}} > 12:33 - 15:21</p>
            <p class="text-primary">
              <b-icon-check-circle></b-icon-check-circle> Refundable
            </p>
            <p class="text-primary">
              <b-icon-check-circle></b-icon-check-circle> Can Reschedule
            </p>
          <hr>
          <b-row>
            <b-col><p class="font-weight-bold"> Total Payment </p></b-col>
            <b-col><b class="text-primary right">$ {{bookingData.price * (searchData.adultPassengger + searchData.childPassengger)}},00</b></b-col>
          </b-row>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h4 class="font-weight-bold mt-5 mb-4">
          Passenger Details
        </h4>
        <div class="row info-panel">
          <div class="col-sm">
            <label class="text-muted">Title</label>
            <select class="form-control mb-4">
              <option></option>
            </select>
            <label class="text-muted">Full Name</label>
            <input type="text" class="form-control mb-4" v-model="userData.fullname"/>
            <label class="text-muted">Nationality</label>
            <select class="form-control mb-4" v-model="nationality" required>
              <option :value="null" disabled>Select Country</option>
              <option v-for="(item, index) in locationData" :key="index" :value="item.country">{{item.country}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-sm-4"></div>
    </div>

    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h4 class="font-weight-bold mt-5 mb-4">
          Passenger Details
        </h4>
        <div class="row info-panel">
          <div class="col-sm">
            <b-row>
              <b-col>
                <input type="checkbox" @click="insurance($event)"><span class="ml-2">Travel Insurance</span>
              </b-col>
              <b-col>
                <p class="text-right text-info">$ 2,00/pax</p>
              </b-col>
            </b-row>
            <hr>
            <p>Get travel compensation up to $ 10.000,00</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4"></div>
    </div>
    <button type="submit" class="btn btn-login mt-4"> Proceed to payment</button>
  </form>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FlightDetail',
  components: {
    Navbar,
    Header,
    Footer
  },
  computed: {
    ...mapGetters({
      userData: 'user/getDetail',
      locationData: 'location/getLocation'
    })
  },
  data () {
    return {
      bookingData: JSON.parse(localStorage.getItem('bookingdata')),
      searchData: JSON.parse(localStorage.getItem('searchdata')),
      id: localStorage.getItem('iduser'),
      nationality: null,
      travelInsurance: 0
    }
  },
  methods: {
    ...mapActions({
      userDetail: 'user/onDetail',
      location: 'location/getLocation',
      insertBooking: 'booking/insertBooking'
    }),
    insurance (event) {
      if (event.target.checked) {
        this.travelInsurance = 2
      } else {
        this.travelInsurance = 0
      }
    },
    booking () {
      const dataBO = {
        iduser: this.bookingData.iduser,
        idflight: this.bookingData.idflight,
        child: this.bookingData.childPassengger,
        adult: this.bookingData.adultPassengger,
        price: this.bookingData.price * (this.bookingData.childPassengger + this.bookingData.adultPassengger + this.travelInsurance),
        nationality: this.nationality,
        insurance: this.travelInsurance
      }
      this.insertBooking(dataBO).then(result => {
        this.$swal(result)
        window.location = '/mybooking'
      })
    }
  },
  mounted () {
    this.userDetail(this.id)
    this.location()
  }
}
</script>

<style scoped>
.flight-detail {
  background-color: #F5F6FA;
  overflow: hidden;
}
.info-panel {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -5px;
  background-color: #fff;
  padding: 30px;
}
.sub-title {
  margin-top: -130px;
  color:#fff;
}
input[type="text"],
input[type="password"],
select {
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}
input[type="text"]:focus,
input[type="password"]:focus,
select:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid rgba(35, 159, 207, 0.68);
}
.info-flight {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -5px;
  background-color: #fff;
  padding: 30px;
  height: 400px;
  overflow: unset;
}
.route-way-detail {
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 25px 0 10px 0;
}
.route-way-detail img {
  margin-top: -15px;
}
.btn-login {
  color: #fff;
  font-weight: bold;
  background-color: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  padding: 12px;
  border-radius: 10px;
  margin: 0 30%;
}
.btn-login:hover {
  color: #fff;
}
@media(max-width: 810px) {
  .info-flight {
    margin-top: 10px;
    height: 520px;
  }
  .route-way-detail {
    width: 100%;
  }
}
@media(max-width: 576px) {
  .row {
    margin: auto;
  }
  .info-flight {
    margin-top: 10px;
    height: 400px;
  }
  .flight-card {
    margin-top: 160px;
  }
  .sub-title {
    color: rgb(75, 69, 69);
  }
  .btn-login {
    width: 40%;
  }
}
</style>
