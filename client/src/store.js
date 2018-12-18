import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let auth = axios.create({
  baseURL: "//localhost:3000/auth",
  withCredentials: true,
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    login(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          debugger
          commit('login', res.data)
          // router.push({name:"myDecks"})
        })
        .catch(err => console.log("Cannot Login"))
    }
  }
})
