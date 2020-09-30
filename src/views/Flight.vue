<template>
  <div class="flight">
    <Navbar type="flight"/>
    <Header />
    <div class="main-content-flight">
      <div class="filter-menu">
        <h2 class="mb-4">Filter</h2>
        <div class="filter-box p-3">
          <div class="filter-list">
            <p class="font-weight-bold">Transit</p>
            <div class="filter-select">
              <p>Direct</p>
              <input type="checkbox" name="Direct">
              <p>Transit</p>
              <input type="checkbox" name="Transit">
              <p>Transit 2+</p>
              <input type="checkbox" name="Transit 2+">
            </div>
          </div>
        </div>
      </div>
      <div class="flight-list">
        <h2 class="mb-4">Select Ticket</h2>
        <div class="flight-box p-3 mb-4" v-for="(item, index) in dataFlight" :key="index">
          <div class="plane-brand">
            <img :src="`http://localhost:3004/${item.imgairlines}`" alt="brand" class="garuda">
            <p class="ml-4 mt-2">{{item.nameairlines}}</p>
          </div>
          <div class="plane-detail">
            <div class="from-title">
              <p class="font-weight-bold">{{item.fromcountry}}</p>
              <p>{{item.departuretime}}</p>
            </div>
            <img src="../assets/img/greysmallplane.png" alt="gray-small-plane">
            <div class="from-title">
              <p class="font-weight-bold">{{item.tocountry}}</p>
              <p>{{item.timearrived}}</p>
            </div>
            <div class="flight-time">
              <p>3 hours 11 minutes</p>
              <div>
                <p v-if="item.direct !== 0 && item.transit === 0 && item.transit2 === 0">(Direct)</p>
                <p v-if="item.transit !== 0 && item.transit2 === 0">(1 transit)</p>
                <p v-if="item.transit2 !== 0" class="more-transit">(2+ transit)</p>
              </div>
            </div>
            <div class="feature-image">
              <div v-if="item.luggage !== 0">
                <img src="../assets/img/bag.png" alt="bag" class="ml-2">
              </div>
              <div v-if="item.meal !== 0">
                <img src="../assets/img/food.png" alt="food" class="ml-2">
              </div>
              <div v-if="item.wifi !== 0">
                <img src="../assets/img/wifi.png" alt="wifi" class="ml-2">
              </div>
            </div>
            <p class="text-primary">$ {{item.price}},00 <span class="text-secondary">/pax</span></p>
            <button class="btn btn-primary button-select">Select</button>
          </div>
          <div class="detail-ticket">
            <p class="font-weight-bold detail-button">view detail</p>
            <img src="../assets/img/btnback.png" alt="arrow">
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Flight',
  components: {
    Navbar,
    Footer,
    Header
  },
  computed: {
    ...mapGetters({
      dataFlight: 'flight/getDataFlight'
    })
  },
  methods: {
    ...mapActions({
      getFlightData: 'flight/findFlightData'
    })
  },
  mounted () {
    // this.getFlightData()
  }
}
</script>

<style scoped>
.flight {
  font-family: "Poppins", sans-serif;
  background-color: #F5F6FA;
}

/** main content */
.main-content-flight {
  display: grid;
  grid-template-columns: 3.5fr 10fr;
  padding: 20px 50px;
}

.filter-box {
  background: #FFFFFF;
  border-radius: 15px;
  width: 323px;
  height: 1250px;
}
.flight-list {
  margin-left: 50px;
}
.filter-select {
  display: grid;
  grid-template-columns: 3fr .3fr;
  border-bottom: 1px solid rgb(216, 213, 213);
}
.flight-box {
  background: #FFFFFF;
  border-radius: 15px;
  width: 100%;
  height: 240px;
}
.plane-brand {
  display: flex;
  align-items: center;
}
.plane-brand img {
  width: 87px;
  height: 40px;
}
.plane-detail {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.from-title p:nth-child(1) {
  font-size: 25px;
}
.from-title p:nth-child(2) {
  margin-top: -10px;
}
.flight-time {
  text-align: center;
}
.flight-time p:nth-child(2) {
  margin-top: -10px;
}
.feature-image {
  margin-top: -17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button-select {
  margin-top: -17px;
}
.detail-button {
  color: #2395ff;
  margin-top: 20px;
}
.detail-ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.more-transit {
  margin-top: -15px;
}
@media screen and (max-width: 1200px) {
  .filter-menu {
    position: absolute;
    display: none;
  }
  .main-content-flight {
    grid-template-columns: 1fr;
  }
  .filter-menu h2 {
    display: none;
  }
  .flight-list {
    height: 100%;
    margin: 0;
  }
}
@media screen and (max-width: 860px) {
  .garuda {
    display: none;
  }
  .feature-image {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .flight-time {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .main-content-flight {
    padding: 20px 0;
  }
  .flight {
    background-color: transparent;
  }
  .flight-list h2 {
    display: none;
  }
  .plane-detail {
    margin-top: 0;
  }
  .button-select {
    display: none;
  }
  .detail-button {
    margin-top: -6px;
  }
  .flight-box {
    border-bottom: 1px solid rgb(172, 170, 170);
    border-radius: 0;
    height: 190px;
  }
}
</style>
