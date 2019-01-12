<template>
  <div class="container-fluid summary-row-height">
    <div class="row d-flex justify-content-center">
      <div class="col-12 d-flex justify-content-around mt-3">
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgainReverse"><i class="fab fa-rev"></i></button>
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgain()"><i class="fas fa-play"></i></button>
        <button class="btn btn-dark btn-sm btn-circle" @click="goHome()"><i class="fas fa-home"></i></button>
      </div>
      <div class="col-12 mt-3">
        <button class="btn btn-sm redtimes" @click="playAgainX()">Replay <i class="fas fa-times-circle "></i></button>
      </div>

      <!-- STAR RATING -->
      <form class="col-12 justify-content-center d-flex mt-3">
        <div class="rate">
          <input type="radio" id="star5" name="myRating" value="5" v-model="myRating" />
          <label @click="rate(5)" for="star5" title="text">5 stars</label>

          <input type="radio" id="star4" name="myRating" value="4" v-model="myRating" />
          <label @click="rate(4)" for="star4" title="text">4 stars</label>

          <input type="radio" id="star3" name="myRating" value="3" v-model="myRating" />
          <label @click="rate(3)" for="star3" title="text">3 stars</label>

          <input type="radio" id="star2" name="myRating" value="2" v-model="myRating" />
          <label @click="rate(2)" for="star2" title="text">2 stars</label>

          <input type="radio" id="star1" name="myRating" value="1" v-model="myRating" />
          <label @click="rate(1)" for="star1" title="text">1 star</label>
        </div>
      </form>
      <div class="col-12 justify-content-center mb-3">
        <h5 v-if="averageRating()">
          Average Rating {{averageRating()}}
        </h5>
        <h5 v-else>
          Be the first to rate this deck!
        </h5>
      </div>


      <div class="card shadow w-75 mt-3 mb-3">
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
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgainReverse"><i class="fab fa-rev"></i></button>
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgain()"><i class="fas fa-play"></i></button>
        <button class="btn btn-dark btn-sm btn-circle" @click="goHome()"><i class="fas fa-home"></i></button>
      </div>
      <div class="col-12 mt-3 mb-3">
        <button class="btn btn-sm redtimes mb-3" @click="playAgainX()">Replay <i class="fas fa-times-circle "></i></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'summary',
    data() {
      return {
        myRating: 3
      }
    },
    mounted() {
      this.userHasRating()
    },
    computed: {
      activeDeck() {
        return this.$store.state.activeDeck
      },
      decksummary() {
        return this.$store.state.summary
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      playAgainX() {
        this.$store.dispatch('playAgainX', this.decksummary.wrong)
      },
      playAgain() {
        if (this.$store.state.user._id == this.activeDeck.authorId) {
          this.$store.dispatch('postSummary', this.decksummary)
        }
        this.$store.dispatch('getStudyView', this.activeDeck._id)
      },
      playAgainReverse() {
        if (this.$store.state.user._id == this.activeDeck.authorId) {
          this.$store.dispatch('postSummary', this.decksummary)
        }
        this.$store.dispatch('getStudyViewReverse', this.activeDeck._id)
      },
      goHome() {
        if (this.$store.state.user._id == this.activeDeck.authorId) {
          this.$store.dispatch('postSummary', this.decksummary)
        }
        this.$store.dispatch('authenticate')
      },
      userHasRating() {
        let userRated = false
        for (let i = 0; i < this.activeDeck.rating.length; i++) {
          let userIdFromRating = this.activeDeck.rating[i]
          if (userIdFromRating.userId == this.user._id) {
            userRated = true
            this.myRating = userIdFromRating.rating
            break
          }
        }
        return userRated
      },
      rate(value) {
        let rating = {
          rating: value,
          deckId: this.activeDeck._id
        }
        if (!this.userHasRating()) {
          this.$store.dispatch('rate', rating)
        } else {
          this.$store.dispatch('updateRate', rating)
        }
      },
      averageRating() {
        let totleRate = 0
        this.activeDeck.rating.forEach(rate => {
          totleRate += rate.rating
        });
        return Math.round(100 * totleRate / this.activeDeck.rating.length) / 100
      },
      checkRating(value) {
        return (value >= this.myRating) ? "checked" : ""
      }
    }
  }

</script>

<style>
  /* .summary-card {
    width: 100%;
  } */

  .redtimes {
    background-color: rgb(209, 74, 101);
  }

  .summary-row-height {
    height: 120vh;
    background-color: rgb(240, 241, 231);
  }

  * {
    margin: 0;
    padding: 0;
  }

  .rate {
    float: left;
    height: 46px;
    padding: 0 10px;
  }

  .rate:not(:checked)>input {
    position: absolute;
    top: -9999px;
  }

  .rate:not(:checked)>label {
    float: right;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
  }

  .rate:not(:checked)>label:before {
    content: '★ ';
  }

  .rate>input:checked~label {
    color: #ffc700;
  }

  .rate:not(:checked)>label:hover,
  .rate:not(:checked)>label:hover~label {
    color: #deb217;
  }

  .rate>input:checked+label:hover,
  .rate>input:checked+label:hover~label,
  .rate>input:checked~label:hover,
  .rate>input:checked~label:hover~label,
  .rate>label:hover~input:checked~label {
    color: #c59b08;
  }
</style>