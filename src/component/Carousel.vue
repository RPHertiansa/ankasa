<template>
  <div class="container">
    <b-card class="card">
      <b-card-text>
        <p>Top 10</p>
        <h4>Top 10 Destinations</h4>
      </b-card-text>

      <b-carousel controls indicators>
        <b-carousel-slide>
          <template v-slot:img>
            <div class="row">
              <div class="outline">
                <img src="../assets/img/paris.png" class="rounded-circle" />
                <p>Paris</p>
              </div>
              <div class="outline">
                <img src="../assets/img/bali.png" class="rounded-circle" />
                <p>Bali</p>
              </div>
              <div class="outline">
                <img src="../assets/img/singapore.png" class="rounded-circle" />
                <p>Singapore</p>
              </div>
              <div class="outline">
                <img src="../assets/img/agra.png" class="rounded-circle" />
                <p>Agra</p>
              </div>
              <div class="outline">
                <img src="../assets/img/sydney.png" class="rounded-circle" />
                <p>Sydney</p>
              </div>
            </div>
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <div class="row">
              <div class="outline">
                <img src="../assets/img/paris.png" class="rounded-circle" />
                <p>Paris</p>
              </div>
              <div class="outline">
                <img src="../assets/img/bali.png" class="rounded-circle" />
                <p>Bali</p>
              </div>
              <div class="outline">
                <img src="../assets/img/singapore.png" class="rounded-circle" />
                <p>Singapore</p>
              </div>
              <div class="outline">
                <img src="../assets/img/agra.png" class="rounded-circle" />
                <p>Agra</p>
              </div>
              <div class="outline">
                <img src="../assets/img/sydney.png" class="rounded-circle" />
                <p>Sydney</p>
              </div>
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-card>
  </div>
</template>

<style scoped>
.container {
  margin: 3% auto;
}
.card {
  background-color: #2395ff;
  background-image: url(../assets/img/plane.png);
  background-repeat: no-repeat;
  background-position: left bottom;
  color: #fff;
  border-radius: 60px;
  text-align: center;
}
.card h4 {
  font-weight: bold;
}
.row {
  margin: 6%;
}
.outline img {
  border: 5px solid blanchedalmond;
  padding: 5px;
  margin: 0 10px 0 30px;
  width: 60%;
}
@media (max-width: 576px) {
  .outline {
    margin: auto;
  }
}
</style>
