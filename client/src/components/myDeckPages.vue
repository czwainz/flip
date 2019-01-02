<template>
  <div class="myDeckPages row d-flex justify-content-center">
    <div v-for="deck in visibleDecks" class="col-5 card deck my-1 shadow myDecks mx-1" @click="goToDeckView(deck._id)"
      :class="deck.color">
      <strong>{{deck.title}}</strong>
      <i>{{deck.description}}</i>
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
      }
    }
  }

</script>

<style>


</style>