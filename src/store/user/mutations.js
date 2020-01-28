import { USER } from '../mutants'

export default {
  [USER.GETUSER] (state, payload) {
    console.log('got here')
  },
  [USER.ME] (state, { data }) {
    console.log(data)
    state.user = { ...state.user, ...data }
  }
}
