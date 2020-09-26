<template>
  <div class="home">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
