<template>
  <div class="decksPage row d-flex justify-content-center">
    <div v-for="deck in visibleDecks" class="col-5 col-md-3 col-lg-3 d-flex justify-content-center">
      <div class="card home-card2 my-2 shadow" :class="deck.color">
        <div @click="goToStudy(deck._id)" class="d-flex justify-content-center align-items-center card-body">
          <h6>{{deck.title}}</h6>
        </div>

        <!-- BUTTONS ON DECKS -->
        <div class=" card-footer justify-content-around d-flex pb-3">
          <!-- PLAY BACK TO FRONT -->
          <i @click="reverseStudy(deck._id)" class="fab fa-rev"></i>
          <!-- COPY DECK BUTTON -->
          <i @click="copyDeckEdit(deck._id)" class="fas fa-copy" v-if="isLoggedIn()"></i>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-around mt-4 mb-5 mr-5 ml-5">
      <button :disabled="!showPrevLink()" type="button" class="btn btn-secondary btn-sm shadow-sm" @click="updatePage(currentPage-1)"><i
          class="fas fa-angle-double-left"></i></button>
      Page {{currentPage+1}} of {{totalPages()}}
      <button :disabled="!showNextLink()" type="button" class="btn btn-secondary btn-sm shadow-sm" @click="updatePage(currentPage+1)">
        <i class="fas fa-angle-double-right"></i></button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'publicPages',
    data() {
      return {
        currentPage: 0,
        pageSize: 6
      }
    },
    props: ['decks'],
    mounted() {
      this.windowSize()
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      visibleDecks: {
        get: function () {
          return this.decks.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
        },
        set: function (pageNumber) {
          return this.decks.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
        }
      }
    },
    methods: {
      windowSize() {
        if ($(window).width() > 960) {
          this.pageSize = 12
        } else if ($(window).width() > 576) {
          this.pageSize = 8;
        } else {
          this.pageSize = 6;
        }
      },
      isLoggedIn() {
        return (this.user._id) ? true : false
      },
      goToStudy(deckId) {
        this.$store.dispatch('getStudyView', deckId)
      },
      reverseStudy(deckId) {
        this.$store.dispatch('getStudyViewReverse', deckId)
      },
      // PAGINATION METHODS
      updateVisibleDecks() {
        this.visibleDecks = this.decks.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
      },
      totalPages() {
        return Math.ceil(this.decks.length / this.pageSize)
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
      }
    }
  }
</script>

<style scoped>
  button {
    vertical-align: middle;
  }
</style>