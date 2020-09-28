<template>
  <div class="user">
    <Navbar type="flight"/>
    <CardUser />
  </div>
</template>

<script>
import Navbar from '../component/Navbar'
import CardUser from '../component/CardUser'

export default {
  name: 'User',
  components: {
    Navbar,
    CardUser
  }
}
</script>

<style scoped>
.user {
  background-color: #F5F6FA;
}
</style>
