<template>
  <div class="home container-fluid background">

    <div class="d-flex justify-content-center">
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
            <img src="../assets/flip-logo-bg-primary.png" class="d-block w-100 flip-carousel" alt="logo">
          </div>
          <div class="carousel-item">
            <h3 class="carouselText">Tap to Flip</h3>
          </div>
          <div class="carousel-item">
            <img src="../assets/flip-back.png" class="d-block w-100 car-img-pad" alt="tap to flip back" height="auto">
          </div>
          <div class="carousel-item">
            <h3 class="carouselText"><br>Mark incorrect<br> or correct</h3>
          </div>
          <div class="carousel-item">
            <img src="../assets/correct-correct-back.png" class="d-block w-100 car-img-pad" alt="choosing correct back"
              height="auto">
          </div>
          <div class="carousel-item">
            <h3 class="carouselText">Summary View</h3>
          </div>
          <div class="carousel-item">
            <img src="../assets/summary-back.png" class="d-block w-100 car-img-pad" alt="summary back" height="auto">
          </div>
        </div>
        <div class="car-indicator">
          <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <!-- END CAROUSEL -->
    </div>
    <div class="row">
      <div class="col-12">
        <h4 class="pubDeckTitle">PUBLIC DECKS</h4>
      </div>
    </div>

    <publicPages :decks="decks" :pageSize="8"></publicPages>
  </div>
</template>

<script>
  // @ is an alias to /src
  import publicPages from '@/components/publicPages.vue'

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
      publicPages
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
  .carouselStuff {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carouselText {
    font-family: 'Shrikhand', cursive;
    color: whitesmoke;
    padding-top: 120px;
  }

  .car-img-pad {
    padding-top: 50px;
  }

  .car-indicator {
    width: 100vw;
  }

  .text-div-width {
    width: 100vw;
  }

  .carousel-inner {
    height: 355px;
  }

  .mainLogo {
    width: 80vw;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>
<style>
  .home-card {
    height: 5rem;
    width: 12rem;
    border-width: 2px !important;
    overflow: hidden;
  }

  .carousel-indicators li {
    width: 10px;
    height: 10px;
    margin-left: 3px;
    border-radius: 100%;
  }

  /* 
  @media only screen and (max-width: 500px) {
    .carousel {
      height: 25vh;
    }
  } */

  .carousel {
    height: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media only screen and (min-width: 500px) {
    .carousel {
      width: 500px;
      height: 400px;
    }
  }

  .flip-carousel {
    padding-top: 70px;
  }

  .pubDeckTitle {
    font-family: 'Aleo', serif;
  }
</style>