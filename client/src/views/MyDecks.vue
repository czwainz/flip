<template>
  <div class="myDecks container-fluid">
    <h1>MY DECKS YAY!</h1>
    <div class="row">
      <div v-for="deck in myDecks" class="col-6 card deck" @click="goToDeckView(deck._id)">
        {{deck.title}}<br>
        {{deck.description}}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button @click="addDeck" class="btn btn-secondary btn-circle"><i class="fas fa-plus"></i></button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'myDecks',
    mounted() {
    },
    data() {
      return {

      }
    },
    computed: {
      myDecks() {
        return this.$store.state.myDecks
      }
    },
    methods: {
      goToDeckView(deckId) {
        this.$store.dispatch('getActiveDeck', deckId)

      },
      addDeck() {
        this.$store.dispatch('addDeck')
      }
    }
  }

</script>

<style>
  .container-fluid {
    /* min-height: 100vh; */
    background-color: var(--primary);
    opacity: .7;
  }
</style>

<style scoped>
  .deck {
    background-color: var(--info)
  }
</style>