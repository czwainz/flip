<template>
  <div class="home container-fluid background">
    <div class="row logoRow">
      <div class="col-12">
        <img src="../assets/flip-logo.png" class="mainLogo">
      </div>
    </div>
    <!-- <div class="row d-flex justify-content-center">
      <div class="col-12">
        <img src="https://placehold.it/200x150" alt="">
      </div>
    </div>  -->
    <div class="row">

      <div class="col-12">
        <h4>PUBLIC DECKS</h4>
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <div v-for="deck in decks" class="col-5 card home-card border border-white bg-warning my-2 shadow">
        <div @click="goToStudy(deck._id)" class="d-flex justify-content-center align-items-center card-body">
          <h5>{{deck.title}}</h5>
        </div>
        <!-- <input @click="reverseStudy(deck._id)" type="button" class=" align-items-center" id="deck._id" value="Play bck/Frnt"> -->
        <button @click="reverseStudy(deck._id)" type="button" class="btn-sm" id="deck._id" style="font-size:10px; vertical-align: middle;">Play
          Rev</button>
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
        isLoggedIn: false
      }
    },
    mounted() {
      this.$store.dispatch('getpublicDecks')
      this.checkLogin()
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
      reverseStudy(deckId) {
        this.$store.dispatch('getStudyViewReverse', deckId)
      },
      checkLogin() {
        if (this.$store.state.user._id) {
          this.isLoggedIn = true
        }
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
  }

  .home-card {
    height: 5rem;
    border-width: 3px !important;
    overflow: hidden;
  }
</style>