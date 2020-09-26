<template>
  <div class="home">
    <Navbar />
    <Jumbotron />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Jumbotron from '../component/Jumbotron'

export default {
  name: 'Home',
  components: {
    Navbar,
    Jumbotron
  }
}
</script>
