<template>
  <div class="container-fluid summary-row-height">
    <div class="row d-flex justify-content-center">
      <div class="col-12 d-flex justify-content-around mt-3">
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgain()"><i class="fas fa-play"></i></button>
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgainReverse"><i class="fab fa-rev"></i></button>
        <button class="btn btn-dark btn-sm btn-circle" @click="goHome()"><i class="fas fa-home"></i></button>
      </div>
      <div class="col-12 mt-3">
        <button class="btn btn-sm redtimes" @click="playAgainX()">Replay <i class="fas fa-times-circle "></i>
          !</button>
      </div>

      <!-- STAR RATING -->
      <fieldset class="rating">
        <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5" title="Awesome - 5 stars"></label>
        <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half"
          title="Pretty good - 4.5 stars"></label>
        <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
        <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half"
          title="Meh - 3.5 stars"></label>
        <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
        <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half"
          title="Kinda bad - 2.5 stars"></label>
        <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
        <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half"
          title="Meh - 1.5 stars"></label>
        <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
        <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
      </fieldset>


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
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgain()"><i class="fas fa-play"></i></button>
        <button class="btn btn-danger btn-sm btn-circle" @click="playAgainReverse"><i class="fab fa-rev"></i></button>
        <button class="btn btn-dark btn-sm btn-circle" @click="goHome()"><i class="fas fa-home"></i></button>
      </div>
      <div class="col-12 mt-3 mb-3">
        <button class="btn btn-sm redtimes" @click="playAgainX()">Replay <i class="fas fa-times-circle "></i>
          !</button>
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
    height: 100vh;
    background-color: rgb(240, 241, 231);
  }

  /* STAR RATING CSS */
  @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

  fieldset,
  label {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 20px;
  }

  h1 {
    font-size: 1.5em;
    margin: 10px;
  }

  /****** Style Star Rating Widget *****/

  .rating {
    border: none;
    float: left;
  }

  .rating>input {
    display: none;
  }

  .rating>label:before {
    margin: 5px;
    font-size: 1.25em;
    font-family: FontAwesome;
    display: inline-block;
    content: "\f005";
  }

  .rating>.half:before {
    content: "\f089";
    position: absolute;
  }

  .rating>label {
    color: #ddd;
    float: right;
  }

  /***** CSS Magic to Highlight Stars on Hover *****/

  .rating>input:checked~label,
  /* show gold star when clicked */
  .rating:not(:checked)>label:hover,
  /* hover current star */
  .rating:not(:checked)>label:hover~label {
    color: #FFD700;
  }

  /* hover previous stars in list */

  .rating>input:checked+label:hover,
  /* hover current star when changing rating */
  .rating>input:checked~label:hover,
  .rating>label:hover~input:checked~label,
  /* lighten current selection */
  .rating>input:checked~label:hover~label {
    color: #FFED85;
  }
</style>