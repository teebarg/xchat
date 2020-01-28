import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/boostrap-vue'
import './plugins/axios'
import './plugins/vuelidate'
import './assets/scss/index.scss'
import './helpers/axios-interceptor'
import './plugins/pusher'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
