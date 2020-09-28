<template>
  <div class="flight-detail">
  <Navbar />
  <Header />
  <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default {
  name: 'FlightDetail',
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>
