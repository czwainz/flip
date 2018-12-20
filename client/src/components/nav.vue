<template>
  <div class="navBar container-fluid">
    <div class="row d-flex justify-content-around bg-primary">
      <div class="col-2 justify-content-start align-self-center">
        <i class="fas fa-bars"></i>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <img src="../assets/flip-logo.png" class="logoSize">
      </div>
      <div v-if="isLoggedIn()" class="col-2">
        <button class="btn btn-outline-light" @click="logout">Logout</button>
      </div>
      <div v-else class="col-2 d-flex justify-content-end">
        <router-link :to="{name: 'auth'}">
          <button class="btn btn-outline-light">Login</button>
        </router-link>
      </div>

    </div>
  </div>
  </div>
</template>

<script>

  export default {
    name: 'navBar',
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      isLoggedIn() {
        if (this.user._id) {
          return true
        } else { return false }
      },
      logout() {
        this.$store.dispatch('logout')
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
</style>