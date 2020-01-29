<template>
  <div class="auth__wrapper">
    <Header :class="{raise: raised}" />
    <p :style="{marginTop: `${fromTop}px`}" v-scroll="handleScroll">Landing Page On CI version 2.0</p>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { ScrollEvent } from '../directives/ScrollEventDirective'

export default {
  name: 'home',
  data (){
    return {
      fromTop: 0,
      raised: false
    }
  },
  mounted () {
    const header = document.querySelector('.header__wrapper')
    this.fromTop = header.offsetHeight
  },
  directives: {
    ScrollEvent
  },
  components: {
    Header,
    Footer
  },
  methods: {
    handleScroll (event, el) {
      this.raised = window.scrollY > 0
    }
  }
}
</script>

<style scoped>
  .auth__wrapper {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
  }

  .raise {
    box-shadow: 0 5px 5px -5px #ccc
  }
</style>
