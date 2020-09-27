<template>
  <div class="home">
    <Navbar @searchtoggle="searchToggle" type="home"/>
    <Jumbotron />
    <Search class="search-modal" @closesearch="searchToggle"/>
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
import Search from '../component/Search'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Jumbotron,
    Carousel,
    CardTrending,
    Search
  },
  methods: {
    searchToggle () {
      const searchBox = document.querySelector('.search-modal')
      searchBox.classList.toggle('search-modal-toggle')
    }
  }
}
</script>

<style scoped>
.search-modal {
  position: absolute;
  top: 50px;
  display: none;
  transform: scale(0);
  transition: all 0.5s ease;
}

/** event */
.search-modal-toggle {
  display: flex;
  transform: scale(1);
}
</style>
