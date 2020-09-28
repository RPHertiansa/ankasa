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
        <div class="flight-box p-3">
          <div class="plane-brand">
            <img src="../assets/img/garuda.png" alt="brand">
            <p class="ml-4 mt-2">Garuda Indonesia</p>
          </div>
          <div class="plane-detail">
            <div class="from-title">
              <p class="font-weight-bold">IDN</p>
              <p>12:33</p>
            </div>
            <img src="../assets/img/greysmallplane.png" alt="gray-small-plane">
            <div class="from-title">
              <p class="font-weight-bold">JPN</p>
              <p>06:33</p>
            </div>
            <div class="flight-time">
              <p>3 hours 11 minutes</p>
              <p>(1 transit)</p>
            </div>
            <div class="feature-image">
              <img src="../assets/img/bag.png" alt="bag" class="ml-2">
              <img src="../assets/img/food.png" alt="food" class="ml-2">
              <img src="../assets/img/wifi.png" alt="wifi" class="ml-2">
            </div>
            <p class="text-primary">$ 214,00 <span class="text-secondary">/pax</span></p>
            <button class="btn btn-primary button-select">Select</button>
          </div>
          <p class="font-weight-bold detail-button">view detail</p>
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
import { mapActions } from 'vuex'

export default {
  name: 'Flight',
  components: {
    Navbar,
    Footer,
    Header
  },
  methods: {
    ...mapActions({
      flightData: 'flight/findFlightData'
    })
  },
  mounted () {
    this.flightData()
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
  height: 50px;
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
}
.button-select {
  margin-top: -17px;
}
.detail-button {
  color: #2395ff;
  margin-top: 20px;
}
</style>
