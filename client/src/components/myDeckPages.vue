<template>
  <div class="myDeckPages row d-flex justify-content-center align-items-stretch ">
    <div v-for="deck in visibleDecks" class="col-5 card deck my-1 shadow myDecks mx-1 d-flex align-items-stretch"
      :class="deck.color">
      <div @click="goToDeckView(deck._id)" class="d-block">
        <div>
          <strong>{{deck.title}}</strong>
        </div>
        <div :class="resizeText(deck.description)">
          <i>{{deck.description}}</i>
        </div>
      </div>
      <!-- BUTTONS ON DECKS -->
      <div class="row deckButtons d-flex-row align-self-end">
        <!-- PLAY BACK TO FRONT -->
        <div class="col-6">
          <i @click="reverseStudy(deck._id)" class="fab fa-rev"></i>
        </div>
        <!-- COPY DECK BUTTON -->
        <div class="col-6">
          <i @click="copyDeckEdit(deck._id)" class="fas fa-copy"></i>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-around mt-4 mb-5 mr-5 ml-5">
      <button :disabled="!showPrevLink()" type="button" class="btn btn-secondary btn-sm shadow-sm" @click="updatePage(currentPage-1)"><i
          class="fas fa-angle-double-left"></i></button>
      Page {{currentPage+1}} of {{totalPages()}}
      <button :disabled="!showNextLink()" type="button" class="btn btn-secondary btn-sm shadow-sm" @click="updatePage(currentPage+1)"><i
          class="fas fa-angle-double-right"></i></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myDeckPages',
    data() {
      return {
        currentPage: 0,
        pageSize: 6
      }
    },
    computed: {
      myDecks() {
        return this.$store.state.myDecks
      },
      visibleDecks: {
        get: function () {
          return this.myDecks.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
        },
        set: function (pageNumber) {
          return this.myDecks.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
        }
      }
    },
    methods: {
      goToDeckView(deckId) {
        this.$store.dispatch('getActiveDeck', deckId)
      },
      //PAGINATION
      updateVisibleDecks() {
        this.visibleDecks = this.myDecks.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
      },
      totalPages() {
        return Math.ceil(this.myDecks.length / this.pageSize)
      },
      showPrevLink() {
        return this.currentPage == 0 ? false : true;
      },
      showNextLink() {
        return this.currentPage == (this.totalPages() - 1) ? false : true
      },
      updatePage(pageNumber) {
        this.currentPage = pageNumber
        this.updateVisibleDecks()
      },
      copyDeckEdit(deckId) {
        let payload = { copyDeck: { origDeckId: deckId }, routeTo: 'myDecks' }
        this.$store.dispatch('copyDeck', payload)
      },
      reverseStudy(deckId) {
        this.$store.dispatch('getStudyViewReverse', deckId)
      },
      resizeText(str) {
        if (str.length > 15) {
          return 'smallText'
        }
        return 'largeText'
      },
      goToStudy(deckId) {
        this.$store.dispatch('getStudyView', deckId)
      }
    }
  }

</script>

<style>
  .smallText {
    font-size: .75em;
  }

  .largeText {
    font-size: 1em;
  }

  .deckButtons {
    display: flex;
    /* align-items: flex-end; */
    justify-content: center;
    /* position: fixed; */
    padding-top: 1rem;
    bottom: 0px;
  }
</style>