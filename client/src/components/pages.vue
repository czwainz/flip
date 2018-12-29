<template>
  <div class="decksPage row d-flex justify-content-around">
    <div v-for="deck in visibleDecks" class="col-5 card home-card border border-white bg-warning my-2 shadow">
      <div @click="goToStudy(deck._id)" class="d-flex justify-content-center align-items-center card-body">
        <h6>{{deck.title}}</h6>
      </div>
      <button @click="reverseStudy(deck._id)" class="btn btn-sm" id="deck._id" data-toggle="tooltip" data-placement="top"
        title="Play in Reverse"><i class="fab fa-rev"></i> Play Rev</button>
    </div>
    <div class="col-12 justify-content-center">
      <button :disabled="!showPrevLink()" type="button" class="btn btn-outline-secondary" @click="updatePage(currentPage-1)"><i
          class="fas fa-angle-double-left"></i></button>
      Page {{currentPage+1}} of {{totalPages()}}
      <button :disabled="!showNextLink()" type="button" class="btn btn-outline-secondary" @click="updatePage(currentPage+1)">
        <i class="fas fa-angle-double-right"></i></button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pages',
    data() {
      return {
        currentPage: 0,
        pageSize: 6
      }
    },
    computed: {
      decks() {
        return this.$store.state.publicDecks
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
      }
    }
  }
</script>

<style scoped>
  button {
    vertical-align: middle;
  }
</style>