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
    user: {},
    myDecks: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setMyDecks(state, myDecks) {
      state.myDecks = myDecks
    }
  },
  actions: {
    // AUTH
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          dispatch('getMyDecks')
          router.push({ name: "myDecks" })
        })
        .catch(err => console.log("Cannot Login"))
    },
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          dispatch('getMyDecks')
        })
        .catch(err => console.log('Cannot Register'))
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          dispatch('getMyDecks')
        })
        .catch(err => console.log('Cannot Authenticate'))
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          console.log('user logged out')
          router.push({ name: 'home' })
        })
        .catch(err => console.log('Cannot Logout'))
    },
    // MY DECKS
    getMyDecks({ commit, dispatch }) {
      api.get('/decks/mydecks')
        .then(res => {
          console.log(res.data)
          commit('setMyDecks', res.data)
        })
        .catch(err => console.log('Cannot get mydecks'))
    },
    getActiveDeck({ commit, dispatch }, deckId) {
      api.get('/decks/' + deckId)
        .then(res => {
          debugger
        })
        .catch(err => console.log('Cannot get deck by ID'))
    }
  }

})
