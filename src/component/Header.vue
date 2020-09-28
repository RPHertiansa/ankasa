<template>
  <div class="header">
      <img src="../assets/img/plane.png" alt="blue-plane">
      <div class="header-content">
        <div class="subheader-content">
          <img src="../assets/img/whiteheadeplane.png" alt="whiteplane">
          <div class="route-way">
            <div class="route-header">
              <div class="route-from">
                <p class="text-white">From</p>
                <h5 class="text-white font-weight-bold">Medan (IDN)</h5>
              </div>
              <img src="../assets/img/whiteswitch.png" alt="switch arrow">
              <div class="route-from text-right">
                <p class="text-white">To</p>
                <h5 class="text-white font-weight-bold">Tokyo (JPN)</h5>
              </div>
            </div>
            <p class="route-explain">Monday, 20 July 20 | 6 Passenger | Economy</p>
          </div>
        </div>
        <p class="font-weight-bold text-white">Change Search</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
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
</style>
