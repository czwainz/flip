<template>
  <div class="home container-fluid background">
    <!-- BEGIN CAROUSEL -->
    <div id="carouselIndicators" class="row carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
        <li data-target="#carouselIndicators" data-slide-to="3"></li>
        <li data-target="#carouselIndicators" data-slide-to="4"></li>
        <li data-target="#carouselIndicators" data-slide-to="5"></li>
        <li data-target="#carouselIndicators" data-slide-to="6"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="5000">
          <img src="../assets/flip-logo-bg-primary.png" class="d-block w-100 mt-5" alt="logo">
        </div>
        <div class="carousel-item">
          <img src="../assets/flip-front.png" class="d-block w-100" alt="tap to flip" height="auto">
        </div>
        <div class="carousel-item">
          <img src="../assets/flip-back.png" class="d-block w-100" alt="tap to flip back" height="auto">
        </div>
        <div class="carousel-item">
          <img src="../assets/correct-front.png" class="d-block w-100" alt="choosing correct" height="auto">
        </div>
        <div class="carousel-item">
          <img src="../assets/correct-back.png" class="d-block w-100" alt="choosing correct back" height="auto">
        </div>
        <div class="carousel-item">
          <img src="../assets/summary-front.png" class="d-block w-100" alt="summary front" height="auto">
        </div>
        <div class="carousel-item">
          <img src="../assets/summary-back.png" class="d-block w-100" alt="summary back" height="auto">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- END CAROUSEL -->

    <div class="row">
      <div class="col-12">
        <h4>PUBLIC DECKS</h4>
      </div>
    </div>
    <!-- Deck for loop moved to pages component -->
    <pages :decks="decks" :pageSize="6"></pages>
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
        isLoggedIn: false,
        slide: 0,
        sliding: null
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
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
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
    margin-left: auto;
    margin-right: auto;

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

  .carousel-indicators li {
    width: 10px;
    height: 10px;
    margin-left: 3px;
    border-radius: 100%;
  }
</style>