<template>
  <div class="navbar-all">
    <div>
      <div class="container navbar-content">
        <b-navbar toggleable="lg" type="light" variant="white">
          <img src="../assets/img/planeBlue.png" alt="plane-logo" class="mr-2">
          <b-navbar-brand href="#" class="brand-name">Ankasa</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="m-auto">
              <b-nav-form>
                <div class="form">
                  <b-form-input
                    size="sm"
                    class="mr-sm-2 search-form"
                    placeholder="Where you want to go ?"
                  ></b-form-input>
                  <button><b-icon icon="search" variant="secondary"></b-icon></button>
                </div>
              </b-nav-form>
              <b-nav-item href="#" class="btn-route ml-3"
                >Find Ticket</b-nav-item
              >
              <b-nav-item href="#" class="btn-route ml-2"
                >My Booking</b-nav-item
              >
            </b-navbar-nav>
            <button class="btn btn-primary btn-signin">Sign Up</button>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar-all {
  font-family: "Poppins", sans-serif;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.brand-name {
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  color: #504f4f !important;
}
.search-form {
  width: 250px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 10px;
  padding-left: 20px;
}
.btn-route {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.btn-route:hover::after {
  content: "";
  width: 40px;
  height: 5px;
  background-color: #2395ff;
  position: absolute;
  display: block;
  margin: auto;
  border-radius: 10px;
  transition: all 0.4s ease;
  top: 50px;
}
.btn-signin {
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
}
.form {
  display: flex;
}
.form button {
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: -40px;
}
</style>
