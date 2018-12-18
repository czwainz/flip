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
      <div class="col-12">
        <h6>VIEW PUBLIC DECKS</h6>
      </div>
      <div class="col-6">
        <img src="https://placehold.it/100x100" alt="">
      </div>
      <div class="col-6">
        <img src="https://placehold.it/100x100" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    components: {
    },
    computed: {

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
    opacity: .7;
  }
</style>