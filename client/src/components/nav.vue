<template>
  <div class="navBar container-fluid">
    <div class="row d-flex justify-content-around bg-primary">
      <div class="col-2 justify-content-start align-self-center">
        <i class="fas fa-bars"></i>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <img src="../assets/flip-logo.png" class="logoSize">
      </div>
      <div class="col-2 d-flex justify-content-end">
        <button @click="drawLogin" class="btn btn-secondary">Login</button>
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
    computed: {},
    methods: {
      drawLogin() {

      }
    },
    components: {
    }
  }

</script>

<style>
  .logoSize {
    height: 2rem;
    width: auto;
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
</style>