<template>
  <div class="home">
    <Navbar />
    <Jumbotron />
    <Carousel />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Jumbotron from '../component/Jumbotron'
import Carousel from '../component/Carousel'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Jumbotron,
    Carousel
  }
}
</script>
