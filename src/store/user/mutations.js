import { USER } from '../mutants'

export default {
  [USER.ME] (state, { data }) {
    state.user = { ...state.user, ...data }
  }
}
