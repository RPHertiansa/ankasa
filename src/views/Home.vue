<template>
  <div class="home">
    <Navbar />
    <Jumbotron />
    <CardTrending />
    <Carousel />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Jumbotron from '../component/Jumbotron'
import CardTrending from '../component/CardTrending'
import Carousel from '../component/Carousel'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Jumbotron,
    CardTrending,
    Carousel
  }
}
</script>
