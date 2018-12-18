import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let auth = axios.create({
  baseURL: "//localhost:3000/auth",
  withCredentials: true,
  timeout: 3000
})

let api = axios.create({
  baseURL: "//localhost:3000/api",
  withCredentials: true,
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    // AUTH
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: "myDecks" })
        })
        .catch(err => console.log("Cannot Login"))
    },
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(err => console.log('Cannot Register'))
    },
    // MY DECKS
    getMyDecks({ commit, dispatch }) {

    }
  }

})
