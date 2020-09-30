<template>
  <div class="booking-page">
    <Navbar type="flight"/>
    <div class="main-booking">
      <CardUser class="card-user"/>
      <div class="booking-content">
        <div class="booking-header mt-3 p-3">
          <p class="text-primary">M Y B O O K I N G</p>
          <div class="header-content">
            <h5 class="font-weight-bold">My Booking</h5>
            <p class="text-primary font-weight-bold">Order History</p>
          </div>
        </div>
        <div class="booking-history mt-4 p-3" v-for="(item, index) in bookingHistory" :key="index">
          <p>{{item.departureday}} - {{item.departuretime}}</p>
          <div class="route-way">
            <div class="from-title">
              <p class="font-weight-bold">{{item.fromcountry}}</p>
            </div>
            <img src="../assets/img/greysmallplane.png" alt="gray-small-plane">
            <div class="from-title">
              <p class="font-weight-bold">{{item.tocountry}}</p>
            </div>
          </div>
          <p class="text-secondary name-airplane">{{item.nameairlines}}, {{item.idflight}}</p>
          <div class="navigation-button mt-4">
            <p class="font-weight-bold text-secondary mr-2">status</p>
            <div style="margin-top: -6px;">
              <p class="payment-status" v-if="item.status === 0">waiting for payment</p>
              <p class="payment-status bg-success" v-else style="width: 140px;">E-ticket Issued</p>
            </div>
            <p class="font-weight-bold text-primary">View Detail</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import CardUser from '../component/CardUser'
import Footer from '../component/Footer'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MyBooking',
  components: {
    Navbar,
    CardUser,
    Footer
  },
  computed: {
    ...mapGetters({
      bookingHistory: 'booking/getBookingHistory'
    })
  },
  data () {
    return {
      userid: localStorage.getItem('iduser')
    }
  },
  methods: {
    ...mapActions({
      getBooking: 'booking/getBookingData'
    })
  },
  mounted () {
    this.getBooking(this.userid)
  }
}
</script>

<style scoped>
.main-booking {
  background-color: #F5F6FA;
  padding: 35px 30px;
  display: grid;
  grid-template-columns: 2fr 4fr;
}
.booking-header {
  width: 100%;
  height: 115px;
  background: #FFFFFF;
  border-radius: 15px;
}
.header-content {
  display: flex;
  justify-content: space-between;
}
.header-content p:nth-child(2) {
  font-size: 15px;
}
.booking-history {
  width: 100%;
  height: 240px;
  background: #FFFFFF;
  border-radius: 15px;
}
.from-title p:nth-child(1) {
  font-size: 20px;
}
.route-way img {
  margin-top: -16px;
  height: 20px;
}
.route-way {
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
}
.name-airplane {
  border-bottom: solid 1px rgb(187, 185, 185);
  padding-bottom: 10px;
}
.payment-status {
  background-color: #FF7F23;
  color: white;
  width: 185px;
  padding: 7px 10px;
  border-radius: 10px;
}
.navigation-button {
  display: grid;
  grid-template-columns: 1fr 8fr 2fr;
}
@media screen and (max-width: 992px) {
  .navigation-button {
    grid-template-columns: 1fr 4.5fr 2fr;
  }
}
@media screen and (max-width: 768px) {
  .main-booking {
    grid-template-columns: 1fr;

  }
  .card-user {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .navigation-button {
    grid-template-columns: 4fr 2fr;
  }
  .navigation-button p:nth-child(3) {
    display: none;
  }
}
@media screen and (max-width: 400px) {
  .main-booking {
    background-color: #fff;
  }
  .navigation-button {
    grid-template-columns: 4fr 2fr;
  }
  .navigation-button p:nth-child(3) {
    display: none;
  }
  .booking-history {
    background-image: url(../assets/img/ticketBackground.png);
    background-size: contain;
    width: 100%;
  }
  .route-way {
    margin-top: -12px;
  }
  .name-airplane {
    margin-top: -10px;
  }
}
</style>
