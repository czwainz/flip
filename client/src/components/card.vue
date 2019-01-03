<template>
  <div class="cardComp row ml-2 mr-2 mb-2 justify-content-around">
    <div class="col-5 card">
      <div class="card-side text-center">{{cardData.front}}</div>
    </div>
    <div class="col-6 card">
      <div class="card-side text-center">{{cardData.back}}</div>
    </div>
    <div v-if="isEditing" class="col-12">
      <div class="btn-group w-100" role="group">
        <button @click="showForm = !showForm" type="button" class="btn btn-warning my-3"><i class="fas fa-pencil-alt"></i></i></button>
        <button @click="removeCard(cardData._id)" class="btn btn-danger my-3"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
    <form v-show="showForm" @submit.prevent="editCard">
      <div class="form-group">
        <label for="editFront">Front</label>
        <input class="form-control" name="editFront" v-model="editedCard.front">
        <label for="editBack">Back</label>
        <input class="form-control" name="editBack" v-model="editedCard.back">
      </div>
      <button type="submit" class="btn btn-secondary my-1">Complete</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'cardComp',
    data() {
      return {
        showForm: false,
        editedCard: {
          front: '',
          back: ''
        }
      }
    },
    computed: {},
    methods: {
      removeCard(cardId) {
        let payload = {
          cardId: cardId,
          deckId: this.cardData.deckId
        }
        this.$store.dispatch('removeCard', payload)
      },
      editCard() {
        let payload = {
          deckId: this.cardData.deckId,
          cardId: this.cardData._id
        }
        for (let prop in this.editedCard) {
          if (this.editedCard[prop]) {
            payload[prop] = this.editedCard[prop]
          }
        }
        this.$store.dispatch('editCard', payload)
        this.showForm = false
      }
    },
    props: ['cardData', 'isEditing']
  }

</script>
<style>
  .cardComp {
    /* display: inline-flex; */
    flex-direction: row;
  }

  .card-side {
    padding: 0px;
  }

  /* .right {
    border-left: 1px solid var(--gray)
  } */
</style>