<template>
  <div class="container-fluid summary-row-height">
    <div class="row d-flex justify-content-center">
      <div class="col-12 d-flex justify-content-around mt-3">
        <button class="btn btn-danger" @click="playAgain()">Play Again!</button>
        <button class="btn btn-dark" @click="goHome()">Home</button>
      </div>
      <div class="card w-75 mt-3 mb-3">
        <div class="card-header">
          <h6>{{activeDeck.title}}</h6>
          <h3>{{decksummary.score}}%</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-danger" v-for="wrong in decksummary.wrong">{{wrong.front}}</li>
          <li class="list-group-item bg-success" v-for="right in decksummary.right">{{right.front}}</li>
        </ul>
      </div>
      <div class="col-12 d-flex justify-content-around mt-3">
        <button class="btn btn-danger" @click="playAgain()">Play Again!</button>
        <button class="btn btn-dark" @click="goHome()">Home</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'summary',
    data() {
      return {

      }
    },
    computed: {
      activeDeck() {
        return this.$store.state.activeDeck
      },
      decksummary() {
        return this.$store.state.summary
      }
    },
    methods: {
      playAgain() {
        this.$store.dispatch('getStudyView', this.activeDeck._id)
      },
      goHome() {
        if
      }
    }
  }

</script>

<style>
  /* .summary-card {
    width: 100%;
  } */

  .summary-row-height {
    height: 100vh;
    background-color: rgb(240, 241, 231);
  }
</style>