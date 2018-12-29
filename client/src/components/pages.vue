<template>
  <div class="decksPage row d-flex justify-content-around">
    <!-- home page styling -->
    <div v-for="deck in visibleDecks" class="col-5 card home-card border border-white bg-warning my-2 shadow">
      <div @click="goToStudy(deck._id)" class="d-flex justify-content-center align-items-center card-body">
        <h6>{{deck.title}}</h6>
      </div>
      <button @click="reverseStudy(deck._id)" type="button" class="btn-sm" id="deck._id" style="font-size:10px; vertical-align: middle;">Play
        Rev</button>
    </div>
    <!-- home page styling-->
    <!-- Page Navigation -->
    <div class="col-12 justify-content-center">
      <button :disabled="!showPrevLink()" type="button" class="btn btn-secondary" @click="updatePage(currentPage-1)"><i
          class="fas fa-angle-double-left"></i></button>
      Page {{currentPage+1}} of {{totalPages()}}
      <button :disabled="!showNextLink()" type="button" class="btn btn-secondary" @click="updatePage(currentPage+1)"><i
          class="fas fa-angle-double-right"></i></button>
    </div>
    <!-- page Navigation -->
  </div>
</template>
<script>
  export default {
    name: 'pages',
    props: ['decks', 'pageSize'],
    data() {
      return {
        currentPage: 0,
        visibleDecks: []
      }
    },
    beforeMount() {
      this.updateVisibleDecks()
    },
    computed: {},
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

</style>