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
    </div>
    <myDeckPages></myDeckPages>
    <div class="row">
      <div class="col-12 mb-5">
        <button @click="addDeck" class="btn btn-secondary btn-circle btn-circle-outline shadow"><i class="fas fa-plus"></i></button>
      </div>
    </div>

  </div>
</template>

<script>
  import myDeckPages from '@/components/myDeckPages.vue'
  export default {
    name: 'myDecks',
    mounted() {
    },
    data() {
      return {

      }
    },
    components: {
      myDeckPages
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
  body {
    background-color: var(--primary);
  }

  .btn-circle-outline {
    border: 1px solid grey;
  }

  .myDecks {
    /* height: 5rem; */
    /* width: 12rem; */
    border-width: 3px !important;
    /* overflow: hidden; */
    justify-content: center;

  }
</style>