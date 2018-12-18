import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import auth from './views/auth.vue'
import myDecks from './views/MyDecks.vue'
import deck from './views/Deck.vue'
import editDeck from './views/EditDeck.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/myDecks',
      name: 'myDecks',
      component: myDecks
    },
    {
      path: '/deck/:deckId',
      name: 'deck',
      component: deck,
      props: true
    },
    {
      path: '/editDeck/:deckId',
      name: 'editDeck',
      component: editDeck,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
