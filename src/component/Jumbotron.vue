<template>
  <div class="main-jumbotron container-fluid">
    <div class="jumbotron-title container">
      <h1>Find your <span class="title-highlight">Flight</span></h1>
      <p class="text-secondary">and explore the world with us</p>
    </div>
    <img src="../assets/img/jumbotronimage2.jpg" alt="jumbotron-image">
    <img src="../assets/img/jumbotronimage1.png" alt="jumbotron-image">
    <div class="egg">
      <img src="../assets/img/vector 6.png" alt="eeg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>
.main-jumbotron {
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  margin-top: 20px;
  overflow-x: hidden;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
.title-highlight {
  color: #2395FF;
}

.jumbotron-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
}
.jumbotron-title h1 {
  font-size: 54px;
  margin-top: -100px;
}
.egg {
  padding-top: 100px;
}

.main-jumbotron img:nth-child(3) {
  margin-bottom: 100px;
  margin-top: -150px;
}

@media screen and (max-width: 992px) {
  .main-jumbotron {
    grid-template-columns: 1fr;
  }
  .jumbotron-title {
    margin-bottom: 30px;
  }
  .jumbotron-title h1 {
    font-size: 40px;
    margin-top: 0;
  }
  .main-jumbotron img:nth-child(2) {
    position: absolute;
    right: 0;
    width: 30%;
  }
  .main-jumbotron img:nth-child(3) {
    width: 65%;
    margin-top: 0;
  }
  .egg {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .main-jumbotron img:nth-child(2),
  .main-jumbotron img:nth-child(3) {
    height: 270px;
  }
  .jumbotron-title h1 {
    font-size: 30px;
  }
}
@media screen and (max-width: 576px) {
  .main-jumbotron img:nth-child(2),
  .main-jumbotron img:nth-child(3) {
    height: 200px;
  }
  .jumbotron-title {
    margin-left: 20px;
  }
  .jumbotron-title h1 {
    font-size: 28px;
  }
}
@media screen and (max-width: 487px) {

  .jumbotron-title {
    margin-left: 20px;
  }
  .main-jumbotron img:nth-child(2) {
    margin-top: 70px;
  }
  .jumbotron-title h1 {
  font-size: 25px;
}

}

</style>
