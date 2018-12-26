<template>
  <!-- CAROUSEL -->
  <div class="home container-fluid background">
    <div class="row">
      <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab"
        :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480" src="https://picsum.photos/1024/480/?image=55"
            alt="image slot">
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
            ut lacus vel interdum.
          </p>
        </b-carousel-slide>

      </b-carousel>

      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>

    </div>
    <!-- END CAROUSEL -->

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