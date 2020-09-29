<template>
  <div class="user">
    <Navbar type="flight"/>
    <div class="container">
      <b-row>
        <b-col><CardUser /></b-col>
        <b-col cols="8">
          <div class="profile mt-3 p-4">
            <p class="sub">PROFILE</p>
            <h3>Profile</h3>
            <form>
              <b-row class="mt-4">
                <b-col>
                  <p>Contact</p>
                  <label class="text-muted">Email</label>
                  <input type="text" class="form-control mb-4" />
                  <label class="text-muted">Phone Number</label>
                  <input type="text" class="form-control mb-4" />
                  <p class="text-right text-info">Account Setting <b-icon-chevron-right></b-icon-chevron-right> </p>
                </b-col>
                <b-col>
                  <p>Biodata</p>
                  <label class="text-muted">Username</label>
                  <input type="text" class="form-control mb-4" />
                  <label class="text-muted">City</label>
                  <input type="text" class="form-control mb-4" />
                  <label class="text-muted">Address</label>
                  <input type="text" class="form-control mb-4" />
                  <label class="text-muted">Post Code</label>
                  <input type="text" class="form-control mb-4" />
                  <button type="submit" class="btn btn-save">Save</button>
                </b-col>
              </b-row>
            </form>
          </div>
        </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import CardUser from '../component/CardUser'

export default {
  name: 'User',
  components: {
    Navbar,
    CardUser
  }
}
</script>

<style scoped>
.user {
  background-color: #F5F6FA;
}
.profile {
  background-color: #fff;
  border-radius: 15px;
  width: 100vh;
  height: 610px;
  margin-bottom: 15px;
}
.sub {
  color: #2395ff;
  letter-spacing: 0.3em;
}
.sub, h3, p {
  font-weight: bolder;
}
input[type="text"],
input[type="password"] {
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}
.btn-save {
  color: #fff;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 12px 25px;
}
</style>
