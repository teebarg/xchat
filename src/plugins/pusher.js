import Echo from 'laravel-echo'
// import Pusher from "pusher-js";
import { CookieService } from '../services/cookieService'
import { CookieName } from '../helpers/constants'
import store from '@/store'
import { MAIN } from '../store/mutants'

window.Pusher = require('pusher-js')
window.Pusher.logToConsole = true
let echo

try {
  echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_PUSHER_APP_KEY,
    cluster: 'eu',
    encrypted: true,
    authEndpoint: 'http://localhost:200/broadcasting/auth',
    auth: {
      headers: {
        Authorization: `Bearer ${CookieService.get(CookieName.TOKEN)}`,
        Accept: 'application/json'
      }
    }
  })
} catch (e) {
  const payload = {
    err: 'Couldnt connect to Pusher',
    variant: 'danger'
  }
  store.dispatch(`AppStore/${MAIN.NOTIFY}`, payload)
}

export default echo
