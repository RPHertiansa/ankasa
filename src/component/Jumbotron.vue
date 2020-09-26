<template>
  <div class="main-jumbotron">
    <div class="jumbotron-title">
      <h1>Find your <span class="title-highlight">Flight</span></h1>
      <p>and explore the world with us</p>
    </div>
    <img src="../assets/img/jumbotronimage2.jpg" alt="jumbotron-image">
    <img src="../assets/img/jumbotronimage1.png" alt="jumbotron-image">
    <img src="../assets/img/vector 6.png" alt="eeg">
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
  grid-template-columns: 1fr 1fr;
}
.title-highlight {
  color: #2395FF;
}
</style>
