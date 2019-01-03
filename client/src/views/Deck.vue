<template>
  <div class="deck container-fluid background">
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
        <div class="col-12">
          <h3 class="deckTitle">{{deck.title}}</h3>
          <p><strong>Description:</strong> {{deck.description}}<br></p>
          <strong>Tags</strong>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="tags in deck.tags.split(', ')" class="tagStyle my-1 mx-1 shadow-sm">
          <div>
            {{tags}}
          </div>
        </div>
      </div>
      <div class="
          row mt-4 mb-4">
        <div class="col-4">
          <button @click="goStudyReverse" class="btn btn-circle btn-warning btn-circle shadow"><i class="fab fa-rev"></i></button>
          <!-- <p>Play in Reverse</p> -->
        </div>
        <div class="col-4">
          <button @click="goStudy" class="btn btn-circle btn-warning btn-circle shadow"><i class="fas fa-play"></i></button>
          <!-- <p>Play</p> -->
        </div>


        <div class="col-4">
          <button @click="isEditingDeck = true" class="btn btn-circle btn-secondary shadow"><i class="fas fa-pencil-alt"></i></button>
          <!-- <p>Edit</p> -->
        </div>

      </div>
      <div class="row ml-2 mr-2 d-flex justify-content-around">
        <div class="col-5">
          <h3 class="text-light">Front</h3>
        </div>
        <div class="col-5">
          <h3 class="text-light">Back</h3>
        </div>
      </div>

      <cardComp v-for="card in deck.cards" :cardData="card" :isEditing="false"></cardComp>

      <div class="row mt-4 mb-4">
        <div class="col-4">
          <button @click="goStudyReverse" class="btn btn-circle btn-warning btn-circle shadow"><i class="fab fa-rev"></i></button>
          <!-- <p>Play in Reverse</p> -->
        </div>

        <div class="col-4">
          <button @click="goStudy" class="btn btn-circle btn-warning btn-circle shadow"><i class="fas fa-play"></i></button>
          <!-- <p>Play</p> -->
        </div>


        <div class="col-4">
          <button @click="isEditingDeck = true" class="btn btn-circle btn-secondary shadow"><i class="fas fa-pencil-alt"></i></button>
          <!-- <p>Edit</p> -->
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
      },
      goStudyReverse() {
        this.$store.dispatch('getStudyViewReverse', this.deck._id)
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

  .deckTitle {
    font-family: 'Aleo', serif;
  }

  .tagStyle {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 4px;
    padding-right: 4px;
    margin-left: 2px;
    margin-right: 2px;
  }

  .tagStyle:nth-child(6n-1) {
    background-color: rgb(146, 252, 146)
  }

  .tagStyle:nth-child(6n-2) {
    background-color: grey;
    color: white;
  }

  .tagStyle:nth-child(6n-3) {
    background-color: rgb(201, 100, 201);
    color: whitesmoke;
  }

  .tagStyle:nth-child(6n-4) {
    background-color: rgb(146, 218, 252)
  }

  .tagStyle:nth-child(6n-5) {
    background-color: rgb(228, 246, 123);
    color: gray;
  }

  .tagStyle:nth-child(6n-6) {
    background-color: rgb(248, 194, 108);
    color: gray;
  }
</style>

<style scoped>
  /* .btn-circle-outline-white {
    border: 1px solid white;
  } */
</style>