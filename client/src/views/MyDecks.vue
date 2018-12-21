<template>
  <div class="myDecks container-fluid background">
    <div class="row">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{name: 'myDecks'}">My Decks</router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-12">
        <h4><strong>My Study Decks</strong></h4>
      </div>
      <div v-for="deck in myDecks" class="col-5 card deck my-1 shadow myDecks mx-1" @click="goToDeckView(deck._id)"
        :class="deck.color">
        <!--  -->
        <!-- v-bind:style="{'background-color': 'var(--info)'}" -->
        {{deck.title}}<br>
        {{deck.description}}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button @click="addDeck" class="btn btn-secondary btn-circle btn-circle-outline shadow"><i class="fas fa-plus"></i></button>
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
  .container-fluid {}

  .btn-circle-outline {
    border: 1px solid grey;
  }

  .background {
    min-height: 100vh;
    background-color: var(--primary);
  }
</style>

<style scoped>
  /* .deck {
    background-color: var(--info)
  } */

   .myDecks {
    height: 5rem;
    border-width: 3px !important;
    overflow: hidden;
    justify-content: center;
  }
</style>