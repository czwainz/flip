<template>
  <div class="cardComp card row my-1">
    <div class="col-5 card-side">{{cardData.front}}</div>
    <div class="col-5 card-side right">{{cardData.back}}</div>
    <div v-if="isEditing" class="col-2">
      <button @click="showForm = !showForm" type="button" class="btn btn-success btn-sm mr-2 p-1"><i class="fas fa-pencil-alt"></i></i></button>
      <button @click="removeCard(cardData._id)" class="btn btn-danger btn-sm mr-2 p-1"><i class="fas fa-trash-alt"></i></button>
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

  .right {
    border-left: 1px solid var(--gray)
  }
</style>