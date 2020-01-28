import store from '@/store'
import { MAIN } from '../store/mutants'

export class Utility {
  static getQueryParams (params) {
    if (typeof params === 'object') {
      let result = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      return `?${result}`
    }
    return params
  }

  static handleError (err) {
    store.dispatch(`AppStore/${MAIN.NOTIFY}`, { err, variant: 'danger' })
  }

  static handleLoader (state) {
    store.dispatch(`AppStore/${MAIN.SET_LOADING}`, state)
  }

  static initializeGmailKey () {
    let gJs
    const d = window.document
    const ref = d.getElementsByTagName('script')[0]
    gJs = d.createElement('script')
    gJs.async = true
    gJs.defer = true
    gJs.src = 'https://apis.google.com/js/platform.js'
    gJs.onload = function () {
      const params = {
        client_id: process.env.VUE_APP_GOOGLE_API_KEY,
        apiKey: process.env.VUE_APP_APIKEY,
        scope: 'email'
      }
      window.gapi.load('auth2', function () {
        window.gapi.auth2.init(params)
      })
    }
    ref.parentNode.insertBefore(gJs, ref)
  }

  static initializeFacebookKey1 () {
    let fbJs
    const d = window.document
    const id = 'facebook-jssdk'
    const ref = d.getElementsByTagName('script')[0]
    fbJs = d.createElement('script')
    fbJs.id = id
    fbJs.async = true
    fbJs.src = 'https://connect.facebook.net/en_US/all.js'
    fbJs.onload = function () {
      if (window.FB) {
        window.FB.init({
          appId: process.env.VUE_APP_FACEBOOK_API_KEY,
          status: true,
          cookie: true,
          xfbml: true,
          version: process.env.VUE_APP_FACEBOOK_API_VERSION
        })
      }
    }
    ref.parentNode.insertBefore(fbJs, ref)
  }

  static initializeFacebookKey () {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.VUE_APP_FACEBOOK_API_KEY,
        cookie: true,
        xfbml: true,
        version: process.env.VUE_APP_FACEBOOK_API_VERSION
      })

      window.FB.AppEvents.logPageView()
    };

    (function (d, s, id) {
      let js; let fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return }
      js = d.createElement(s); js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  }
}
