import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoginForm: false
  },
  mutations: {
    toggleLoginForm(state) {
      state.showLoginForm = !state.showLoginForm
    }
  },
  actions: {
    toggleLoginForm({ commit, dispatch }) {
      commit('toggleLoginForm')
    }
  }
})
