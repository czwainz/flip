<template>
  <div class="home container-fluid">
    <div class="row logoRow">
      <div class="col-12">
        <img src="../assets/flip-logo.png" class="mainLogo">
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-12">
        <!-- CAROUSEL -->
        <img src="https://placehold.it/200x150" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-if="isLoggedIn">
        <router-link :to="{name: 'myDecks'}">My Decks</router-link>
      </div>
      <div class="col-12">
        <h6>VIEW PUBLIC DECKS</h6>
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <div @click="goToStudy(deck._id)" v-for="deck in decks" class="col-5 card home-card border border-white bg-warning">
        <div class="d-flex justify-content-center align-items-center card-body">
          {{deck.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch('getpublicDecks')
    },
    components: {
    },
    computed: {
      decks() {
        return this.$store.state.publicDecks
      }
    },
    methods: {
      goToStudy(deckId) {
        this.$store.dispatch('getStudyView', deckId)
      },
      isLoggedIn() {
        if (this.$store.state.user._id) {
          return true
        } return false
      }
    }
  }
</script>

<style scoped>
  .mainLogo {
    width: 80vw;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .container-fluid {
    min-height: 100vh;
    background-color: var(--primary);
    /* opacity: .7; */
  }

  .home-card {
    height: 5rem;
    font-size: 25px;
    border-width: 3px !important;
  }
</style>