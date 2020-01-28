import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = process.env.VUE_APP_END_POINT
