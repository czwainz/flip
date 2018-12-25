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
    <!-- for loop moved to pages component -->
    <pages :decks="decks"></pages>
    <!-- page component -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import pages from '@/components/pages.vue'

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
      pages
    },
    computed: {
      decks() {
        return this.$store.state.publicDecks
      }
    },
    methods: {
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
</style>
<style>
  .home-card {
    height: 5rem;
    border-width: 3px !important;
    overflow: hidden;
  }
</style>