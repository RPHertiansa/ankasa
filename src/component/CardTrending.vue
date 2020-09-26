<template>
  <div class="container mb-5">
    <p class="sub">Trending</p>
    <div class="row mb-3">
      <h4 class="col-sm-10">Trending Destinations</h4>
      <a class="col-sm-2">View All</a>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card col-sm-2">
          <div class="top-card mt-3">
            <p class="ml-3 mt-1"><b>15</b> Airlines</p>
          </div>
          <div class="city">
            <p>Tokyo,</p>
            <h4>Japan</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    background-image: url(../assets/img/trending1.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 260px;
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

  .top-card::after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(20, 20, 20) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 20px;
  }

  .city {
    z-index: 1;
  }

  .sub {
    color: #2395FF;
    letter-spacing: 0.3em;
  }
</style>
