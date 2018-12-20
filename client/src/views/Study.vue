<template>
  <div class="container-fluid">
    <div class="row studyRow justify-content-center d-flex">
      <div v-if="hasCards" @click="back = !back" class="flip-card ">
        <div :class="{'transition-flip': back}" class="flip-card-inner">
          <div class="flip-card-front justify-content-center d-flex">
            <!-- Front of Card -->
            <div class="card shadow study ">
              <h1 class="card-info card-body h-100 d-flex align-items-center justify-content-center">
                {{activeDeck.cards[(deckPosition)].front}} </h1>
            </div>
          </div>
          <div class="flip-card-back justify-content-center d-flex">
            <!-- Back of Card -->
            <div class="card shadow study d-flex align-middle">
              <h1 v-if="back" class="card-info card-body h-100 d-flex align-items-center justify-content-center">
                {{activeDeck.cards[(deckPosition)].back}} </h1>
              <div v-if="back" class="card-button card-footer d-flex justify-content-around">
                <i class="fas fa-times-circle x-and-check" @click="markWrong()"></i>
                <i class="fas fa-check-circle x-and-check" @click="markRight()"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3>
          This deck has no cards
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'study',
    data() {
      return {
        back: false,
        deckPosition: 0,
        summaryResults: {
          deckId: "",
          wrong: [],
          right: [],
          score: 0,
          deckTitle: ""
        },
        hasCards: null
      }
    },
    computed: {
      activeDeck() {
        return this.$store.state.activeDeck
      }
    },
    mounted() {
      if (this.$store.state.activeDeck.cards.length > 0) {
        this.hasCards = true
      } else {
        this.hasCards = false
      }
    },
    methods: {
      markWrong() {
        // this.$store.dispatch('sendWrong', this)
        this.summaryResults.wrong.push(this.activeDeck.cards[this.deckPosition])
        this.nextCard()
      },
      markRight() {
        this.summaryResults.right.push(this.activeDeck.cards[this.deckPosition])
        this.nextCard()
      },
      nextCard() {
        if (this.activeDeck.cards.length > this.deckPosition + 1) {
          this.deckPosition++
        } else {
          this.summaryResults.score = Math.round((this.summaryResults.right.length / this.activeDeck.cards.length) * 100)
          this.summaryResults.deckId = this.activeDeck._id
          this.summaryResults.deckTitle = this.activeDeck.title
          this.$store.dispatch('goToSummary', this.summaryResults)
        }
      }
    }
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

  /* .card-info {
    display: table-cell;
    vertical-align: middle;
  }

  .card-button {
    display: table-cell;
    vertical-align: middle;
  } */

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

  .x-and-check {
    font-size: 30px;
  }
</style>