import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import auth from './views/auth.vue'
// @ts-ignore
import myDecks from './views/MyDecks.vue'
// @ts-ignore
import deck from './views/Deck.vue'
// @ts-ignore
// import editDeck from './views/EditDeck.vue'
// @ts-ignore
import Study from './views/Study.vue'
// @ts-ignore
import summary from './views/Summary.vue'

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
      path: '/study/:deckId',
      name: 'study',
      component: Study,
      props: true
    },
    {
      path: '/summary/:deckId',
      name: 'summary',
      component: summary,
      props: true
    },
    // {
    //   path: '/editDeck/:deckId',
    //   name: 'editDeck',
    //   component: editDeck,
    //   props: true
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
