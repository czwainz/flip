<template>
  <div class="myDeckPages row d-flex justify-content-center">
    <div v-for="deck in visibleDecks" class="col-5 card deck my-1 shadow myDecks mx-1" @click="goToDeckView(deck._id)"
      :class="deck.color">
      <strong>{{deck.title}}</strong>
      <i>{{deck.description}}</i>
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
      }
    }
  }

</script>

<style>


</style>