import { USER } from '../mutants'
import { AuthenticationService } from '../../services/authenticationService'
import router from '@/router'
import { Utility } from '../../helpers/utilities'
import { CookieService } from '../../services/cookieService'
import { CookieName } from '../../helpers/constants'

export default {
  [USER.LOGIN] ({ commit, dispatch }, payload) {
    Utility.handleLoader(true)
    AuthenticationService.login(payload)
      .then(res => router.push(router.app._route.query.redirectTo || '/dashboard'))
      .finally(() => Utility.handleLoader(false))
  },
  [USER.SOCIAL] ({ commit, dispatch }, payload) {
    Utility.handleLoader(true)
    AuthenticationService.socialLogin(payload)
      .then(res => router.push('/dashboard'))
      .finally(() => Utility.handleLoader(false))
  },
  [USER.SIGNUP] ({ commit, dispatch }, payload) {
    Utility.handleLoader(true)
    AuthenticationService.signUp(payload)
      .then(res => router.push('/dashboard'))
      .finally(() => Utility.handleLoader(false))
  },
  [USER.ME] ({ commit }, payload) {
    AuthenticationService.me()
      .then(res => commit(USER.ME, res))
  },
  [USER.LOGOUT] ({ commit }) {
    AuthenticationService.logout()
      .then(() => {
        router.push('/')
        CookieService.delete(CookieName.TOKEN)
        commit(USER.ME, {})
      })
  }
}
