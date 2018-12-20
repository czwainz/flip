<template>
  <div class="cardForm">
    <div class="row">
      <div class="col-12">

        <form @submit.prevent="addCard">
          <div class="form-group">
            <label for="cardFront">Card Front</label>
            <input type="text" class="form-control" name="cardFront" placeholder="Card Front" maxlength="250" v-model="cardFront">
            <label for="cardBack">Card Back</label>
            <input type="text" class="form-control" name="cardBack" placeholder="Card Back" maxlength="250" v-model="cardBack">
            <button type="submit" class="btn btn-warning btn-block mt-1 ">Add Card</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cardForm',
    data() {
      return {
        cardFront: '',
        cardBack: ''
      }
    },
    props: ['deckId'],
    computed: {},
    methods: {
      addCard() {
        let payload = {
          deckId: this.deckId,
          front: this.cardFront,
          back: this.cardBack
        }
        this.$store.dispatch('addCard', payload)
      }
    }
  }

</script>

<style>


</style>