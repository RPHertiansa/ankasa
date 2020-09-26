<template>
  <div class="container">
    <b-card class="card">
      <b-card-text>
        <p>Top 10</p>
        <h4>Top 10 Destinations</h4>
      </b-card-text>

      <b-carousel controls indicators background="#ababab">
        <!-- Text slides with image -->
        <b-carousel-slide>
          <img src="../assets/img/paris.png" class="rounded-circle img-fluid">
        </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      </b-carousel>
    </b-card>
  </div>
</template>

<style scoped>
  .card {
    background-color:#2395FF;
    color: #fff;
    border-radius: 60px;
    text-align: center;
  }

  .card h4 {
    font-weight: bold;
    margin-bottom: 45px;
  }
</style>
