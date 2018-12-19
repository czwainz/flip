<template>
  <div class="container-fluid">
    <div class="row studyRow">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <!-- Front of Card -->
            <div class="card study">
              <h1 class="card-info"> {{activeDeck.cards[0].front}} </h1>
            </div>
          </div>
          <div class="flip-card-back">
            <!-- Back of Card -->
            <div class="card study">
              <h1 class="card-info"> {{activeDeck.cards[0].back}} </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'study',
    data() {
      return {

      }
    },
    computed: {
      activeDeck() {
        return this.$store.state.activeDeck
      }
    },
    methods: {}
  }

</script>

<style>
  .study {
    height: 90%;
    width: 90%;
    display: table;
  }

  .studyRow {
    height: 94vh;
  }

  .card-info {
    display: table-cell;
    vertical-align: middle;
  }

  .card-study {
    height: 100vh;
  }

  .flip-card {
    width: 98vw;
    height: 100%;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 94vw;
    height: 94vh;
    backface-visibility: hidden;
  }

  .flip-card-front {
    /* background-color: #bbb; */
    z-index: 2;
  }

  .flip-card-back {
    /* background-color: #2980b9; */
    transform: rotateY(180deg);
    z-index: 1;
  }
</style>