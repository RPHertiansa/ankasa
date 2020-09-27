<template>
  <div class="navbar-all">
      <div class="container navbar-content">
        <b-navbar toggleable="lg" type="light" variant="white">
          <img src="../assets/img/planeBlue.png" alt="plane-logo" class="mr-2">
          <b-navbar-brand href="#" class="brand-name">Ankasa</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" class="nav-responsive" is-nav>
            <b-navbar-nav class="m-auto main-navbar">
              <b-nav-form class="mr-3">
                <div class="form">
                  <b-form-input
                    size="sm"
                    class="mr-sm-2 search-form"
                    placeholder="Where you want to go ?"
                  ></b-form-input>
                  <button><b-icon icon="search" variant="secondary"></b-icon></button>
                </div>
              </b-nav-form>
              <b-nav-item class="btn-route ml-2" @click="searchToggle($event)">Find Ticket</b-nav-item>
              <b-nav-item href="#" class="btn-route ml-2">My Booking</b-nav-item>
            </b-navbar-nav>
            <div>
              <div v-if="type === 'flight'" class="navbar-profile">
                <img src="../assets/img/message.png" alt="message" class="button-notifmsg">
                <img src="../assets/img/bell.png" alt="bell" class="button-notifmsg">
                <div class="user-profile"><img src="../assets/img/profile.png" alt="profile"></div>
              </div>
              <div v-else>
                <button class="btn btn-primary btn-signin">Sign Up</button>
              </div>
            </div>
          </b-collapse>
        </b-navbar>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['type'],
  methods: {
    searchToggle (event) {
      this.$emit('searchtoggle')
      event.target.classList.toggle('button-on')
    }
  }
}
</script>

<style scoped>
.navbar-all {
  font-family: "Poppins", sans-serif;
  padding-top: 20px;
  background-color: #fff;
  padding-bottom: 20px;
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
.navbar-profile {
  display: flex;
  width: 130px;
  height: 27px;
  justify-content: space-between;
}

.user-profile {
  width: 45px;
  height: 45px;
  margin-top: -10px;
  border: 2px solid #2395ff;
  border-radius: 25px;
  overflow: hidden;
  padding: 3px;
}

@media screen and (max-width: 992px) {
  .btn-route {
    display: block;
  }
  .btn-route:hover::after {
    position: unset;
    width: 100%;
    margin-top: -5px;
  }
  .main-navbar {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .nav-responsive {
    padding-left: 15px;
  }
  .nav-responsive .btn-signin {
    margin-top: 12px;
  }
  .nav-responsive form {
    margin-top: 15px;
  }
  .button-on::after {
    width: 0 !important;
    background-color: transparent !important;
  }
}
/** event */
.button-on::after {
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
  margin-left: 22px;
}
</style>
