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
              <input type="checkbox" name="Direct" @click="direct($event)">
              <p>Transit</p>
              <input type="checkbox" name="Transit" @click="transit($event)">
              <p>Transit 2+</p>
              <input type="checkbox" name="Transit 2+" @click="transit2($event)">
            </div>
            <p class="font-weight-bold mt-3">Facilities</p>
            <div class="filter-select">
              <p>Luggage</p>
              <input type="checkbox" name="Luggage">
              <p>In-Flight Meal</p>
              <input type="checkbox" name="In-Flight Meal">
              <p>Wi-fi</p>
              <input type="checkbox" name="Wi-fi">
            </div>
            <p class="font-weight-bold mt-3">Departure Time</p>
            <div class="filter-select">
              <p>00:00 - 06:00</p>
              <input type="checkbox" name="00:00 - 06:00">
              <p>06:00 - 12:00</p>
              <input type="checkbox" name="06:00 - 12:00">
              <p>12:00 - 18:00</p>
              <input type="checkbox" name="12:00 - 18:00">
              <p>18:00 - 24:00</p>
              <input type="checkbox" name="18:00 - 24:00">
            </div>
            <p class="font-weight-bold mt-3">Time Arrived</p>
            <div class="filter-select">
              <p>00:00 - 06:00</p>
              <input type="checkbox" name="00:00 - 06:00">
              <p>06:00 - 12:00</p>
              <input type="checkbox" name="06:00 - 12:00">
              <p>12:00 - 18:00</p>
              <input type="checkbox" name="12:00 - 18:00">
              <p>18:00 - 24:00</p>
              <input type="checkbox" name="18:00 - 24:00">
            </div>
            <p class="font-weight-bold mt-3">Airlines</p>
            <div class="filter-select">
              <p>Garuda Indonesia</p>
              <input type="checkbox" name="Garuda Indonesia">
              <p>Air Asia</p>
              <input type="checkbox" name="Air Asia">
              <p>Lion Air</p>
              <input type="checkbox" name="Lion Air">
            </div>
            <button class="btn btn-primary" style="width: 100%;" @click="goFilter">Filter</button>
          </div>
        </div>
      </div>
      <div class="flight-list">
        <div style="display: flex; justify-content: space-between; align-item: center;">
          <h2 class="mb-4">Select Ticket</h2>
          <p class="font-weight-bold text-primary mt-3">Filter</p>
        </div>
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
            <button class="btn btn-primary button-select" @click="toDetailFlight(item.idflight)">Select</button>
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
  data () {
    return {
      searchdata: JSON.parse(localStorage.getItem('searchdata')),
      directValue: 0
    }
  },
  computed: {
    ...mapGetters({
      dataFlight: 'flight/getDataFlight'
    })
  },
  methods: {
    ...mapActions({
      getFlightData: 'flight/findFlightData'
    }),
    direct (event) {
      if (event.target.checked) {
        this.directValue = 1
      } else {
        this.directValue = 0
      }
      console.log(this.directValue)
    },
    transit (event) {
      let transitData = 0
      if (event.target.checked) {
        transitData = 1
      } else {
        transitData = 0
      }
      console.log(transitData)
    },
    transit2 (event) {
      let transitData2 = 0
      if (event.target.checked) {
        transitData2 = 1
      } else {
        transitData2 = 0
      }
      console.log(transitData2)
    },
    goFilter () {
      this.searchdata.direct = this.directValue
      console.log(this.searchdata)
    },
    toDetailFlight (idflight) {
      const data = {
        idflight,
        iduser: localStorage.getItem('iduser'),
        childPassengger: this.searchdata.childPassengger,
        adultPassengger: this.searchdata.adultPassengger
      }
      localStorage.setItem('bookingdata', JSON.stringify(data))
    }
  },
  mounted () {
    this.getFlightData()
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
