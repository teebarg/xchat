import { CHAT, USER } from '../mutants'
// import { AuthenticationService } from '../../services/authenticationService'
// import router from '@/router'
import { Utility } from '../../helpers/utilities'
import { ChatService } from '../../services/chatService'

export default {
  [CHAT.GET_MESSAGES] ({ commit, dispatch }, target) {
    Utility.handleLoader(true)
    ChatService.getMessages(target)
      .then(res => commit(CHAT.GET_MESSAGES, { target, data: res }))
      .catch(err => console.log(err))
      .finally(() => Utility.handleLoader(false))
  },
  [CHAT.SEND_MESSAGE] ({ commit, dispatch }, payload) {
    ChatService.sendMessage(payload)
      .then(res => commit(CHAT.UPDATE_MESSAGE, { payload: res.data, target: payload.to }))
      .catch(err => console.log(err))
  },
  [CHAT.UPDATE_MESSAGE] ({ commit }, payload) {
    console.log('action', payload)
    commit(CHAT.UPDATE_MESSAGE, payload)
  },
  [CHAT.GET_CONTACTS] ({ commit }) {
    ChatService.getContacts()
      .then(res => commit(CHAT.GET_CONTACTS, res))
      .catch(err => console.log(err))
  }
}
