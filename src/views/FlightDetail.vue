<template>
  <div class="flight-detail">
    <Navbar />
    <Header type="flight-detail" />
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h4 class="text-white font-weight-bold sub-title mb-4">
          Contact Person Details
        </h4>
        <div class="row info-panel">
          <div class="col-sm">
            <label class="text-muted">Full Name</label>
            <input type="text" class="form-control mb-4" />
            <label class="text-muted">Email</label>
            <input type="text" class="form-control mb-4" />
            <label class="text-muted">Phone Number</label>
            <select class="form-control mb-4">
              <option></option>
            </select>
            <b-alert variant="danger" show>
              <b-icon-exclamation-triangle-fill
                class="mr-2"
              ></b-icon-exclamation-triangle-fill>
              Make sure the customer data is correct</b-alert>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <h4 class="text-white font-weight-bold sub-title mb-4">
          Flight Details
        </h4>
        <div class="info-flight">
          <img src="../assets/img/garuda.png" alt="logo-garuda" />
          <b class="text-muted ml-5">Garuda Indonesia</b>
          <div class="route-way">
            <div class="from-title">
              <p class="font-weight-bold">Medan (IDN)</p>
            </div>
            <img
              src="../assets/img/greysmallplane.png"
              alt="gray-small-plane"
            />
            <div class="from-title">
              <p class="font-weight-bold">Tokyo (JPN)</p>
            </div>
          </div>
          <p class="small text-muted">Sunday, 15 Agustus 2020 > 12:33 - 15:21</p>
          <p class="text-primary"> <b-icon-check-circle></b-icon-check-circle> Refundable</p>
          <p class="text-primary"> <b-icon-check-circle></b-icon-check-circle> Can Reschedule</p>
          <hr>
          <p class="font-weight-bold">Total Payment <b class="text-primary right">$ 145,00</b></p>
        </div>
      </div>
      <p class="font-weight-bold text-white sub-title d-none d-md-block">View Details</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default {
  name: 'FlightDetail',
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>

<style>
.info-panel {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -5px;
  background-color: #fff;
  padding: 30px;
}
.sub-title {
  margin-top: -130px;
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
  height: 100%;
}
.route-way {
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 25px 0 10px 0;
}
</style>
