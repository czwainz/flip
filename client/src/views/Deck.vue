<template>
  <div class="deck container-fluid">
    <div class="row">
      <div class="col-12 mt-4">
        <h1>THIS MY DECK</h1>
      </div>
    </div>
    <div class="row">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{name: 'myDecks'}">My Decks</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Active Deck</li>
        </ol>
      </nav>
    </div>
    <div v-for="card in deck.cards" class="row my-1 mx-1 d-flex justify-content-around">
      <div class="card col-6">{{card.front}}</div>
      <div class="card col-6">{{card.back}}</div>
    </div>
    <div class="row">
      <div class="col-6">
        <p>Edit deck</p>
      </div>
      <div class="col-6">
        <router-link :to="{name: 'editDeck', params: {deckId: this.deck._id}}">
          <button class="btn btn-circle btn-secondary"><i class="fas fa-pencil-alt"></i></button>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'deck',
    mounted() {
      this.$store.dispatch('getActiveDeck', this.$route.params.deckId)
    },
    data() {
      return {

      }
    },
    computed: {
      deck() {
        return this.$store.state.activeDeck
      }
    },
    methods: {}
  }

</script>

<style>
  .btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
  }
</style>