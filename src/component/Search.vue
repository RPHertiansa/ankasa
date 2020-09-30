<template>
  <div class="search-page">
    <div class="search">
      <p>Hey,</p>
      <p>Where you want to go?</p>
      <div class="recent-search">
        <p>Recently Searched</p>
        <img src="../assets/img/btnback.png" alt="btn-back" />
      </div>
      <div class="search-route">
        <div class="route-box">
          <p class="text-secondary">From</p>
          <p class="route"><button type="button" class="btn font-weight-bold" data-toggle="modal" data-target="#from">{{locationfrom.city}}</button>
          <p class="text-secondary">{{locationfrom.country}}</p>
        </div>
        <img src="../assets/img/switch.png" alt="switch-route" />
        <div class="route-box">
          <p class="text-secondary">To</p>
          <p class="route"><button type="button" class="btn font-weight-bold" data-toggle="modal" data-target="#to">{{locationto.city}}</button></p>
          <p class="text-secondary">{{locationto.country}}</p>
        </div>
      </div>
      <div class="button-typetrip">
        <button class="btn btn-light one-way" @click="onewayButton('oneway')" :style="oneWay">
          <img
            src="../assets/img/planeWhite.png"
            alt="oneway-logo"
            class="mr-2" />One Way</button>
        <button class="btn btn-light" @click="roundtripButton('round trip')" :style="roundtrip">
          <img src="../assets/img/loop.png" alt="loop" class="mr-2" /> Round Trip</button>
      </div>
      <div class="depature mt-4 text-secondary">
        <p>Depature</p>
        <b-form-datepicker
          id="datepicker-lg"
          size="lg"
          local="en"
          placeholder="select date"
          v-model="selectDate"
          class="depature-select"
          required
        ></b-form-datepicker>
      </div>
      <div class="person">
        <p class="text-secondary mt-4">How many person?</p>
        <div class="person-select">
          <b-form-select class="mb-3 mr-2" v-model="childTotal">
            <b-form-select-option :value="null" disabled>Child</b-form-select-option>
            <b-form-select-option value="1">1 Child</b-form-select-option>
            <b-form-select-option value="2">2 Child</b-form-select-option>
            <b-form-select-option value="3">3 Child</b-form-select-option>
            <b-form-select-option value="4">4 Child</b-form-select-option>
            <b-form-select-option value="5">5 Child</b-form-select-option>
            <b-form-select-option value="6">6 Child</b-form-select-option>
            <b-form-select-option value="7">7 Child</b-form-select-option>
            <b-form-select-option value="8">8 Child</b-form-select-option>
          </b-form-select>
          <b-form-select class="mb-3" v-model="adultTotal">
            <b-form-select-option :value="null" disabled>Adult</b-form-select-option>
            <b-form-select-option value="1">1 Adult</b-form-select-option>
            <b-form-select-option value="2">2 Adult</b-form-select-option>
            <b-form-select-option value="3">3 Adult</b-form-select-option>
            <b-form-select-option value="4">4 Adult</b-form-select-option>
            <b-form-select-option value="5">5 Adult</b-form-select-option>
            <b-form-select-option value="6">6 Adult</b-form-select-option>
            <b-form-select-option value="7">7 Adult</b-form-select-option>
            <b-form-select-option value="8">8 Adult</b-form-select-option>
          </b-form-select>
        </div>
      </div>
      <div class="class-select">
        <p class="text-secondary">Which class do you want?</p>
        <div class="custom-control custom-radio custom-control-inline radio-button">
          <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" @click="setSeatClass('Economy')"/>
          <label class="custom-control-label font-weight-light" for="customRadioInline1">Economy</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline radio-button">
          <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" @click="setSeatClass('Business')"/>
          <label class="custom-control-label font-weight-light" for="customRadioInline2">Business</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline radio-button">
          <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" @click="setSeatClass('First class')"/>
          <label class="custom-control-label font-weight-light" for="customRadioInline3">First class</label>
        </div>
      </div>
      <button class="btn btn-primary mt-4" style="width: 100%;" @click="searchFlight()">Search Flight <img src="../assets/img/whitearrow.png" class="ml-5"></button>
      <button class="btn btn-danger mt-2 close-search" @click="$emit('closesearch')">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  props: ['locationfrom', 'locationto'],
  data () {
    return {
      selectDate: '',
      childTotal: '',
      adultTotal: '',
      seatClass: '',
      flightType: '',
      oneWay: 'background-color: #f0f0f0;',
      roundtrip: 'background-color: #f0f0f0;'
    }
  },
  methods: {
    ...mapActions({
      getDataLocation: 'location/getLocation',
      searchDataFlight: 'flight/searchFlightData'
    }),
    searchFlight () {
      let countryfrom = ''
      let countryto = ''
      if (this.locationfrom.city === 'Select City' || this.locationto.city === 'Select City') {
        this.$swal('Plese select destination')
      } else if (this.locationfrom.city === this.locationto.city) {
        this.$swal('Destination cannot be same')
      } else {
        countryfrom = this.locationfrom.city
        countryto = this.locationto.city
      }
      const search = {
        departure: !this.selectDate ? this.$swal('Plese fill departure field') : this.selectDate,
        childPassengger: !this.childTotal ? this.$swal('Plese fill person field') : parseInt(this.childTotal),
        adultPassengger: !this.adultTotal ? this.$swal('Plese fill person field') : parseInt(this.adultTotal),
        seatClass: !this.seatClass ? this.$swal('Choose one class seat') : this.seatClass,
        flightType: !this.flightType ? this.$swal('Choose one flight type') : this.flightType,
        locationFrom: countryfrom,
        locationTo: countryto,
        countryfrom: this.locationfrom.country,
        countyto: this.locationto.country
      }
      if (!this.selectDate || !this.childTotal || !this.adultTotal || !this.seatClass || !this.flightType || !countryto || !countryfrom) {
      } else {
        const searchData = JSON.stringify(search)
        localStorage.setItem('searchdata', searchData)
        this.searchDataFlight(search)
        this.$router.push('/flight')
      }
    },
    setSeatClass (value) {
      this.seatClass = value
    },
    onewayButton (value) {
      if (this.roundtrip === 'background-color: #f0f0f0;') {
        this.oneWay = 'background-color: #2395ff; color: white;'
      } else {
        this.roundtrip = 'background-color: #f0f0f0;'
        this.oneWay = 'background-color: #2395ff; color: white;'
      }
      this.flightType = value
    },
    roundtripButton (value) {
      if (this.oneWay === 'background-color: #f0f0f0;') {
        this.roundtrip = 'background-color: #2395ff; color: white;'
      } else {
        this.oneWay = 'background-color: #f0f0f0;'
        this.roundtrip = 'background-color: #2395ff; color: white;'
      }
      this.flightType = value
    }
  },
  mounted () {
    this.getDataLocation()
  }
}
</script>

<style scoped>
.search-page {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  width: 100%;
  height: 750px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  z-index: 3;
}
.search {
  width: 400px;
  height: 100%;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  padding: 15px;
  display: grid;
  justify-content: center;
}
.search p:nth-child(2) {
  font-size: 20px;
  margin-top: -10px;
}

.recent-search {
  display: flex;
  justify-content: space-between;
}
.recent-search p {
  color: #2395ff;
}
.recent-search img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.search-route {
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.route-box {
  height: 110px;
  padding: 6px 15px;
}
.search-route p:nth-child(1),
.search-route p:nth-child(3) {
  font-size: 15px !important;
  font-weight: 100;
}

.search-route img {
  width: 30px;
  height: 30px;
}

.route button {
  font-size: 23px !important;
  margin-bottom: -15px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: rgb(63, 63, 63);
  padding: 0 5px;
  font-size: 20px !important;
}
.route button:hover {
  color: #2395ff;
}
.route button:active {
  background-color: transparent !important;
  color: #2395ff !important;
}
.route-box:nth-child(3) {
  text-align: right;
}
.button-typetrip {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.button-typetrip button:nth-child(2) {
  border: #f0f0f0;
}

.depature .depature-select {
  margin-top: -10px;
}
.person-select {
  display: flex;
  margin-top: -8px;
}

.class-select p {
  margin-bottom: 2px;
}
.close-search {
  display: none !important;
}
@media screen and (max-width: 992px) {
  .close-search {
    display: unset !important;
  }
}
</style>
