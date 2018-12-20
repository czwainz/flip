<template>
  <div class="deck container-fluid">
    <!-- Breadcrumbs -->
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
    <!-- Breadcrumbs -->
    <!-- V-If(view deck/cards)---------- -->
    <div v-show="!isEditingDeck">
      <div class="row">
        <div class="col-12 mt-4">
          <h3>{{deck.title}}</h3>
          <p><strong>Description:</strong> {{deck.description}}<br>
            <strong>Tags:</strong> {{deck.tags}}</p>
        </div>
      </div>
      <cardComp v-for="card in deck.cards" :cardData="card" :isEditing="false"></cardComp>
      <div class="row">
        <div class="col-6">
          <button @click="goStudy" class="btn btn-circle btn-warning btn-circle"><i class="fas fa-play"></i></button>
          <p>Play</p>
        </div>
        <div class="col-6">
          <button @click="isEditingDeck = true" class="btn btn-circle btn-secondary"><i class="fas fa-pencil-alt"></i></button>
          <p>Edit</p>
        </div>
      </div>
    </div>
    <!-- V-ELSE (edit  deck/cards) -->
    <div v-show="isEditingDeck">
      <editDeck v-on:finishedEditing="isEditingDeck = false"></editDeck>
    </div>
  </div>
</template>

<script>
  import cardComp from '@/components/card.vue'
  import editDeck from '@/views/EditDeck.vue'

  export default {
    name: 'deck',
    mounted() {
      this.$store.dispatch('getActiveDeck', this.$route.params.deckId)
    },
    data() {
      return {
        isEditingDeck: false
      }
    },
    computed: {
      deck() {
        return this.$store.state.activeDeck
      }
    },
    methods: {
      goStudy() {
        this.$store.dispatch('getStudyView', this.deck._id)
      }
    },
    components: {
      cardComp,
      editDeck
    }
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

<style scoped>
  /* .btn-circle-outline-white {
    border: 1px solid white;
  } */
</style>