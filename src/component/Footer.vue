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
            <a>Find Ticket</a>
            <a>My Booking</a>
            <a>Chat</a>
            <a>Notification</a>
        </div>
        <div class="col-sm-3 mb-2">
          <h5>Download Angkasa App</h5>
          <img src="../assets/img/Gplay.png" class="img-download mb-3">
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
    position: absolute;
    bottom: 0;
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

  footer ul li {
    list-style: none;
    margin-bottom: 15px;
  }

  .img-download {
    width: 130px;
    display: block;
  }

  .info img {
    margin: 0 15px 10px 0;
  }

  @media (max-width: 768px) {
    footer .img-download {
      width: 100px;
      display: inline;
    }
  }

  @media (max-width: 576px) {

    footer ul li {
      display: inline;
      margin-right: 15px;
    }
  }
</style>
