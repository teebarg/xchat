import { CHAT } from '../mutants'

export default {
  [CHAT.GET_MESSAGES] (state, { target, data: { data } }) {
    // state.messages = data.reverse()
    // console.log(target, data)
    // state.messages[target] = data.reverse()
    state.messages = { ...state.messages, [target]: data.reverse() }
  },
  [CHAT.UPDATE_MESSAGE] (state, { target, payload }) {
    console.log('got here', payload)
    state.messages[target].push(payload)
  },
  [CHAT.GET_CONTACTS] (state, { data }) {
    state.contacts = data
  }
}
