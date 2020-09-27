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
