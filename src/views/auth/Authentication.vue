<template>
    <div class="auth__wrapper">
      <Header :class="{raise: raised}" />
        <router-view :style="{marginTop: `${fromTop}px`}" v-scroll="handleScroll" />
      <Footer />
    </div>
</template>

<script>

import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'
import { ScrollEvent } from '../../directives/ScrollEventDirective'
import { Utility } from '../../helpers/utilities'

export default {
  name: 'Authentication',
  components: {
    Header,
    Footer
  },
  directives: {
    ScrollEvent
  },
  data () {
    return {
      fromTop: 0,
      raised: false
    }
  },
  mounted () {
    const header = document.querySelector('.header__wrapper')
    this.fromTop = header.offsetHeight
    Utility.initializeGmailKey()
    Utility.initializeFacebookKey()
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
