<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-3 mb-2">
          <h5><img src="../assets/img/planeBlue.png" class="logo"> Ankasa</h5>
          <p class="text-muted">Find your Flight and explore the <br> world with us. We will take care of the rest</p>
        </div>
        <div class="col-sm-3 mb-2">
          <h5>Features</h5>
            <div class="feature">
              <p>Find Ticket</p>
              <p>My Booking</p>
              <p>Chat</p>
              <p>Notification</p>
            </div>
        </div>
        <div class="col-sm-3 mb-2">
          <h5>Download Ankasa App</h5>
          <img src="../assets/img/Gplay.png" class="img-download">
          <img src="../assets/img/Gapp.png" class="img-download">
        </div>
        <div class="col-sm-3 mb-2">
          <h5>Follow Us</h5>
          <div class="info">
            <img src="../assets/img/facebook.png">
            <img src="../assets/img/twitter.png">
            <img src="../assets/img/instagram.png">
            <img src="../assets/img/youtube.png">
          </div>
        </div>
      </div>

      <!-- copyright -->
      <div class="row mt-3">
        <div class="col-sm-6">
          <p>
            &copy; Ankasa. All Right Reserved.
          </p>
        </div>
        <div class="col-sm-6">
          <p>
            <img src="../assets/img/map-pin.png">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  footer {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    position: relative;
    bottom: 0;
    top: 5vh;
    width: 100%;
  }

  footer h5 {
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0 20px 0;
  }

  .logo {
    width: 30px;
  }

  .feature p {
    display: block;
  }

  .img-download {
    width: 110px;
    display: block;
    margin-bottom: 10px;
  }

  .info img {
    margin: 0 15px 10px 0;
  }

  @media (max-width: 768px) {
    .img-download {
      display: inline;
      margin-right: 10px;
    }
  }

  @media (max-width: 576px) {
    .feature p {
      display: inline;
      margin-right: 15px;
    }
  }
</style>
