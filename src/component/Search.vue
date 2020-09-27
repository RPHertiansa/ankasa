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
          <p class="route">Medan</p>
          <p class="text-secondary">Indonesia</p>
        </div>
        <img src="../assets/img/switch.png" alt="switch-route" />
        <div class="route-box">
          <p class="text-secondary">To</p>
          <p class="route">Tokyo</p>
          <p class="text-secondary">Japan</p>
        </div>
      </div>
      <div class="button-typetrip">
        <button class="btn btn-primary">
          <img
            src="../assets/img/planeWhite.png"
            alt="oneway-logo"
            class="mr-2"
          />One Way
        </button>
        <button class="btn btn-light">
          <img src="../assets/img/loop.png" alt="loop" class="mr-2" /> Round
          Trip
        </button>
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
        ></b-form-datepicker>
      </div>
      <div class="person">
        <p class="text-secondary mt-4">How many person?</p>
        <div class="person-select">
          <b-form-select class="mb-3 mr-2">
            <b-form-select-option :value="null" disabled
              >Child</b-form-select-option
            >
            <b-form-select-option value="a">Option A</b-form-select-option>
          </b-form-select>
          <b-form-select class="mb-3">
            <b-form-select-option :value="null" disabled
              >Adult</b-form-select-option
            >
            <b-form-select-option value="a">Option A</b-form-select-option>
          </b-form-select>
        </div>
      </div>
      <div class="class-select">
        <p class="text-secondary">Which class do you want?</p>
        <div class="custom-control custom-radio custom-control-inline radio-button">
          <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
          <label class="custom-control-label font-weight-light" for="customRadioInline1">Economy</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline radio-button">
          <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
          <label class="custom-control-label font-weight-light" for="customRadioInline2">Bussines</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline radio-button">
          <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input"/>
          <label class="custom-control-label font-weight-light" for="customRadioInline3">First class</label>
        </div>
      </div>
      <button class="btn btn-primary mt-4">Search Flight <img src="../assets/img/whitearrow.png" class="ml-5"></button>
      <button class="btn btn-danger mt-2" @click="$emit('closesearch')">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      selectDate: ''
    }
  }
}
</script>

<style scoped>
.search-page {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  width: 100%;
  height: 720px;
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
  height: 100%;
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

.route {
  font-size: 23px !important;
  margin-bottom: -2px;
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
  background-color: #f0f0f0;
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
</style>
