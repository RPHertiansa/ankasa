<template>
  <div class="container mb-5">
    <p class="sub">Trending</p>
    <div class="row mb-3">
      <h4 class="col-sm-10">Trending Destinations</h4>
      <a class="col-sm-2">View All</a>
    </div>
    <section class="main">
      <div class="card">
        <div class="top-card mt-3 ml-3">
          <p class="ml-3 mt-1"><b>15</b> Airlines</p>
        </div>
        <div class="row city">
          <div class="col-sm-8">
            <p>Tokyo,</p>
          <h4>Japan</h4>
          </div>
          <div class="col-sm-2 btn-right">
            <img src="../assets/img/btnback.png">
          </div>
        </div>
      </div>
      <img src="https://source.unsplash.com/random/201x201" alt="">
      <img src="https://source.unsplash.com/random/202x202" alt="">
      <img src="https://source.unsplash.com/random/203x203" alt="">
      <div class="card">
        <div class="top-card mt-3 ml-3">
          <p class="ml-3 mt-1"><b>15</b> Airlines</p>
        </div>
        <div class="row city">
          <div class="col-sm-8">
            <p>Tokyo,</p>
          <h4>Japan</h4>
          </div>
          <div class="col-sm-2 btn-right">
            <img src="../assets/img/btnback.png">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: grid;
}
.main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
.card {
  background-image: url(../assets/img/trending1.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 260px;
  width: 200px;
  border-radius: 20px;
  color: #fff;
}
.top-card {
  background-color: rgba(255, 255, 255, 0.41);
  border-radius: 20px;
  font-size: 12px;
  width: 88px;
  height: 28px;
}
.card::after {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  position: absolute;
  bottom: 0;
  border-radius: 20px;
}
.city {
  z-index: 1;
  margin: 60% 0 0 10%;
}
.btn-right {
  margin-top: 20%;
  background: rgba(255, 255, 255, 0.17);
  border-radius: 20px;
  height: 29px;
  width: 29px;
}
.btn-right img {
  margin-left: -7px;
}
.sub {
  color: #2395ff;
  letter-spacing: 0.3em;
}

@media (max-width: 576px) {
  .main {
    margin: 0 auto;
  }
  .btn-right {
    margin: -20% 0 0 60%;
  }
}
</style>
