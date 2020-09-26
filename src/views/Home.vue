<template>
  <div class="home">
    <Navbar />
    <Jumbotron />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Jumbotron from '../component/Jumbotron'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Jumbotron
  }
}
</script>
