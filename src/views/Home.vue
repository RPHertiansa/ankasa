<template>
  <div class="home">
    <div class="modal fade modal-sm" id="from" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Select Destination</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-for="(item, index) in locationData" :key="index" class="location-data">
              <p>{{item.country}}</p>
              <p>{{item.city}}</p>
              <button class="btn btn-primary btn-sm" data-dismiss="modal" @click="selectLocationFrom(item)">select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-sm" id="to" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Select Destination</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-for="(item, index) in locationData" :key="index" class="location-data">
              <p>{{item.country}}</p>
              <p>{{item.city}}</p>
              <button class="btn btn-primary btn-sm" data-dismiss="modal" @click="selectLocationTo(item)">select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbar @searchtoggle="searchToggle" type="home"/>
    <Jumbotron />
    <Search class="search-modal" @closesearch="searchToggle" :locationfrom="locationFrom" :locationto="locationTo"/>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      locationData: 'location/getLocation'
    })
  },
  data () {
    return {
      locationFrom: {
        country: 'Select Country',
        city: 'Select City'
      },
      locationTo: {
        country: 'Select Country',
        city: 'Select City'
      }
    }
  },
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
    },
    selectLocationFrom (value) {
      this.locationFrom = value
    },
    selectLocationTo (value) {
      this.locationTo = value
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

.location-data {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}
.location-data button {
  margin-top: -10px;
}

/** event */
.search-modal-toggle {
  display: flex;
  transform: scale(1);
}
</style>
