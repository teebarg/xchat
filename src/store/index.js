import Vue from 'vue'
import Vuex from 'vuex'
import { UserStore } from './user'
import { MAIN } from './mutants'
import { ChatStore } from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    UserStore,
    ChatStore,
    AppStore: {
      namespaced: true,
      state: {
        data: {},
        show: false,
        variant: '',
        loading: false
      },
      mutations: {
        [MAIN.NOTIFY] (state, { err, variant }) {
          state.data = { ...state.data, ...err }
          state.show = true
          state.variant = variant
        },
        [MAIN.SET_LOADING] (state, payload) {
          state.loading = payload
        }
      },
      actions: {
        [MAIN.NOTIFY] ({ commit }, payload) {
          commit(MAIN.NOTIFY, payload)
        },
        [MAIN.SET_LOADING] ({ commit }, payload) {
          commit(MAIN.SET_LOADING, payload)
        }
      },
      getters: {
        notify ({ show, data, variant }) {
          return { show, data, variant }
        },
        loading ({ loading }) {
          return loading
        },
        getErrors ({ data: { data } }) {
          return data && data.errors
        }
      }
    }
  }
})
