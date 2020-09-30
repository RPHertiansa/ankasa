<template>
  <div v-if="type === 'flight-detail'">
    <div class="header">
      <img src="../assets/img/plane.png" alt="blue-plane" />
      <p class="font-weight-bold text-white text-right sub-title d-none d-md-block">View Details</p>
    </div>
  </div>
  <div v-else>
    <div class="header">
      <img src="../assets/img/plane.png" alt="blue-plane" />
      <div class="header-content">
        <div class="subheader-content">
          <img src="../assets/img/whiteheadeplane.png" alt="whiteplane" />
          <div class="route-way">
            <div class="route-header">
              <div class="route-from">
                <p class="text-white">From</p>
                <h5 class="text-white font-weight-bold">{{searchdata.locationFrom}} ({{searchdata.countryfrom}})</h5>
              </div>
              <img src="../assets/img/whiteswitch.png" alt="switch arrow" />
              <div class="route-from text-right">
                <p class="text-white">To</p>
                <h5 class="text-white font-weight-bold">{{searchdata.locationTo}} ({{searchdata.countyto}})</h5>
              </div>
            </div>
            <p class="route-explain">{{searchdata.departure}} | {{searchdata.adultPassengger + searchdata.childPassengger}} Passenger | {{searchdata.seatClass}}</p>
          </div>
        </div>
        <p class="font-weight-bold text-white change-search">Change Search</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      searchdata: JSON.parse(localStorage.getItem('searchdata'))
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #2395ff;
  height: 200px;
  border-radius: 0px 0px 30px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header img:nth-child(1) {
  position: absolute;
  height: 200px;
  left: 0;
}
.header-content {
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}
.header-content img {
  height: 34.08px !important;
  width: 50px;
  position: unset !important;
}
.subheader-content {
  display: flex;
  align-items: center;
}
.route-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
}
.route-header img:nth-child(2) {
  width: 17px;
  height: 17px !important;
}
.route-from h5 {
  margin-top: -10px;
}
.route-explain {
  position: absolute;
  color: rgb(223, 221, 221);
  margin-left: 20px;
  margin-top: 10px;
}
@media screen and (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding: 0 20px;
  }
  .subheader-content img:nth-child(1) {
    display: none;
  }
  .route-explain {
    position: static;
  }
}
</style>
