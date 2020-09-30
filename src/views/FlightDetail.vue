<template>
  <div class="flight-detail">
    <Navbar />
    <Header type="flight-detail" />
  <form>
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
          <img src="../assets/img/garuda.png" alt="logo-garuda" />
          <b class="text-muted ml-5">Garuda Indonesia</b>
          <div class="route-way">
            <div class="from-title">
              <p class="font-weight-bold">Medan (IDN)</p>
            </div>
            <img src="../assets/img/greysmallplane.png" alt="gray-small-plane"/>
            <div class="from-title">
              <p class="font-weight-bold">Tokyo (JPN)</p>
            </div>
          </div>
            <p class="small text-muted">
              Sunday, 15 Agustus 2020 > 12:33 - 15:21</p>
            <p class="text-primary">
              <b-icon-check-circle></b-icon-check-circle> Refundable
            </p>
            <p class="text-primary">
              <b-icon-check-circle></b-icon-check-circle> Can Reschedule
            </p>
          <hr>
          <b-row>
            <b-col><p class="font-weight-bold"> Total Payment </p></b-col>
            <b-col><b class="text-primary right">$ 145,00</b></b-col>
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
            <input type="text" class="form-control mb-4" />
            <label class="text-muted">Nationality</label>
            <select class="form-control mb-4">
              <option></option>
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
                <b-form-checkbox>Travel Insurance </b-form-checkbox>
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

export default {
  name: 'FlightDetail',
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>

<style scoped>
.flight-detail {
  background-color: #F5F6FA;
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
}
.route-way {
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin: 25px 0 10px 0;
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
}
@media(max-width: 576px) {
  .flight-detail {
    overflow-x: hidden;
  }
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
    width: 50%;
  }
}
</style>
