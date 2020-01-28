<template>
  <div style="display: grid">
    <router-view/>
    <Toast :message="message" :variant="variant" />
    <ScaleLoader  @click.stop="test" id="overlay" :loading="loading" color="#099" height="50px" margin="5px"/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Toast from './components/shared/Toast'
import ScaleLoader from 'vue-spinner/src/ScaleLoader'

export default {
  name: 'App',
  data () {
    return {
      message: '',
      variant: '',
      loading: false
    }
  },
  computed: {
    ...mapState({
      errr: 'AppStore'
    }),
    ...mapGetters({
      showNotification: 'AppStore/notify',
      showLoader: 'AppStore/loading'
    })
  },
  components: {
    Toast,
    ScaleLoader
  },
  methods: {
    test () {
      alert('yahhhh')
    }
  },
  watch: {
    showNotification: {
      immediate: true,
      handler ({ show, data: { message }, variant }) {
        if (show) {
          this.message = message
          this.variant = variant
          this.$bvToast.show('my-toast')
        }
      }
    },
    showLoader: {
      immediate: true,
      handler (loading) {
        this.loading = loading
      }
    }
  }
}
</script>

<style lang="scss">
  #overlay {
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    /*cursor: pointer; !* Add a pointer on hover *!*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
