<template>
  <div class="container-fluid">
    <div class="row studyRow justify-content-center d-flex">
      <div @click="back = !back" class="flip-card ">
        <div :class="{'transition-flip': back}" class="flip-card-inner">
          <div class="flip-card-front justify-content-center d-flex">
            <!-- Front of Card -->
            <div class="card study ">
              <h1 class="card-info"> {{activeDeck.cards[0].front}} </h1>
            </div>
          </div>
          <div class="flip-card-back justify-content-center d-flex">
            <!-- Back of Card -->
            <div class="card study ">
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
        back: false
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
    width: 96vw;
    height: 100%;
    perspective: 1000px;
  }

  .flip-card-inner {
    transition: transform 1.5s;
    transform-style: preserve-3d;
  }

  .transition-flip {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 96vw;
    height: 94vh;
    backface-visibility: hidden;
  }

  .flip-card-front {
    z-index: 2;
  }

  .flip-card-back {
    /* background-color: #2980b9; */
    transform: rotateY(180deg);
    z-index: 1;
  }
</style>