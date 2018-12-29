<template>
  <div class="myDecks container-fluid">
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
    <div class="row d-flex justify-content-center">
      <div class="col-12">
        <h4><strong>My Study Decks</strong></h4>
      </div>
      <!-- decks -->
      <div v-for="deck in myDecks" class="col-5 card deck my-1 shadow myDecks mx-1" @click="goToDeckView(deck._id)"
        :class="deck.color">
        <strong>{{deck.title}}</strong>
        <i>{{deck.description}}</i>
      </div>
      <!-- decks -->
      <h4>My Decks</h4>
      <pages :decks="myDecks" :pageSize="6"></pages>
    </div>
    <div class="row">
      <div class="col-12">
        <button @click="addDeck" class="btn btn-secondary btn-circle btn-circle-outline shadow"><i class="fas fa-plus"></i></button>
      </div>
    </div>

  </div>
</template>

<script>
  import pages from '@/components/pages.vue'
  export default {
    name: 'myDecks',
    mounted() {
    },
    data() {
      return {

      }
    },
    components: {
      pages
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

  body {
    background-color: var(--primary);
  }

  .btn-circle-outline {
    border: 1px solid grey;
  }
</style>

<style scoped>
  .myDecks {
    height: 5rem;
    border-width: 3px !important;
    /* overflow: hidden; */
    justify-content: center;
  }
</style>