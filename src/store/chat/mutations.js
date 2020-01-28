import { CHAT } from '../mutants'

export default {
  [CHAT.GET_MESSAGES] (state, { target, data: { data } }) {
    state.messages = { ...state.messages, [target]: data.reverse() }
  },
  [CHAT.UPDATE_MESSAGE] (state, { target, payload }) {
    state.messages[target].push(payload)
  },
  [CHAT.GET_CONTACTS] (state, { data }) {
    state.contacts = data
  }
}
