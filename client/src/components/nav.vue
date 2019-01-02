<template>
  <div class="navBar container-fluid">
    <!--Navbar-->
    <nav class="navbar navbar-light light-blue lighten-4 row d-flex">

      <!-- Navbar brand -->
      <div class="col-10 d-flex justify-content-start">
        <router-link :to="{name: 'home'}"><img src="../assets/flip-logo.png" class="logoSize"></router-link>
      </div>

      <!-- Collapse button -->
      <div class="col-2">
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
              class="fas fa-bars fa-1x"></i></span></button>
      </div>


      <!-- Collapsible content -->
      <div class="collapse navbar-collapse rounded shadow" id="navbarSupportedContent1">

        <!-- Links -->
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <a class="nav-link">
              <router-link :to="{name: 'home'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">Home</router-link>
            </a>
          </li>

          <div v-if="isLoggedIn()">
            <li class=" nav-item-active">
              <a class="nav-link" @click="logout">
                <router-link :to="{name: 'home'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">Logout</router-link>
              </a>
            </li>

            <li class=" nav-item-active">
              <a class="nav-link">
                <router-link :to="{name: 'myDecks'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">My Decks</router-link>
              </a>
            </li>
          </div>

          <div class="d-flex justify-content-center" v-else>
            <li class="d-flex">
              <a class="nav-link">
                <router-link :to="{name: 'auth'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">Sign In</router-link>
              </a>
            </li>
          </div>

          <li class="pl-2 pr-2 pb-2">
            <!-- Search form -->
            <form @submit.prevent="search">
              <input class="form-control text-center" type="text" placeholder="Search decks" aria-label="Search"
                v-model="searchWord">
            </form>
          </li>

        </ul>
      </div>
    </nav>
  </div>



</template>

<script>

  export default {
    name: 'navBar',
    data() {
      return {
        searchWord: ''
      }
    },

    computed: {
      user() {
        return this.$store.state.user
      },
      searchedDecks() {
        return this.$store.state.searchedDecks
      }
    },

    methods: {
      isLoggedIn() {
        return (this.user._id) ? true : false
      },
      logout() {
        this.$store.dispatch('logout')
      },
      search() {
        this.$store.dispatch('search', this.searchWord)
        console.log(this.searchedDecks)
      }
    },

    components: {
    }
  }

</script>

<style>
  .logoSize {
    height: 6vh;
    width: auto;
    margin-top: .5rem;
    margin-bottom: .5rem;
  }

  .btn-sm {
    height: 25px;
    font-size: 10px;
  }

  .fa-1x {
    font-size: 1.5rem;
    color: white;
  }

  .navbar-toggler.toggler-example {
    cursor: pointer;
  }

  .navbar {
    background-color: #78C2AD;
  }

  .navbar-collapse {
    background-color: #72b6fa;
  }

  .nav-link {
    display: flex;
    justify-content: center;
  }
</style>