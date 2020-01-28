<template>
  <div class="dashboard__profile">
    <div class="img__section" v-if="user">
      <div>
        <img :src="imageUrl + user.image" alt="No Image"/>
      </div>
      <p class="font-weight-bold">{{user.username}}</p>
      <p>Status</p>
    </div>
    <div class="info__section">
      <ul>
        <li>
          <i class="fas fa-location-arrow"/>
          <span>Location</span>
        </li>
        <li>
          <i class="fas fa-mobile"/>
          <span>{{user.mobile}}</span>
        </li>
        <li>
          <i class="far fa-envelope"/>
          <span>{{user.email}}</span>
        </li>
      </ul>
    </div>
    <div>
      media
    </div>
    <div class="float-right">
      <b-button size="sm" @click="signout">Sign Out</b-button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Profile',
    data () {
      return {
        imageUrl: process.env.VUE_APP_IMG_URL,
      }
    },
    computed: {
      ...mapGetters({
        user: 'UserStore/getUser'
      })
    },
    methods: {
      ...mapActions({
        signout: 'UserStore/logout'
      })
    }
  }
</script>

<style scoped>

</style>
