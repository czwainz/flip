<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h5>ADD/EDIT DECK</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <form @submit.prevent="editDeck">
          <div class="form-group">
            <label for="deckTitle">Current Deck Title: {{deck.title}}</label>
            <input type="text" class="form-control" placeholder="Deck Title" name="deckTitle" v-model="editedDeck.title">
            <label for="deckDescription">Current Deck Description: {{deck.description}}</label>
            <input type="text" class="form-control" placeholder="Deck Description" name="deckDescription" v-model="editedDeck.description">
            <label for="deckTags">Current Deck Tags: {{deck.tags}}</label>
            <input type="text" class="form-control" placeholder="Deck Tags" name="deckTags" v-model="editedDeck.tags">
            <label for="deckColor">Current Color: {{deck.color}}</label>
            <input type="text" class="form-control" placeholder="Hexcode" name="deckColor" v-model="editedDeck.color">

            <!-- radio button -->
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input v-if="checked" @change="checked = 'public'" type="radio" class="form-check-input" name="public"
                  value="public" :checked="checked == 'public' ? true : false">
                <input v-else @change="checked = 'public'" type="radio" class="form-check-input" name="public" value="public"
                  :checked="deck.public ? true : false">
                Public
              </label>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input v-if="checked" @change="checked = 'private'" type="radio" class="form-check-input" name="private"
                  value="private" :checked="checked == 'private' ? true : false">
                <input v-else @change="checked = 'private'" type="radio" class="form-check-input" name="private" value="private"
                  :checked="!deck.public ? true : false">
                Private
              </label>
            </div>
            <!-- radio button -->
          </div>

          <!-- Color Change -->
          <div class="col-12">
            <div class="btn-group mr-2 mb-1" role="group" aria-label="First group">
              <button type="button" @click="editedDeck.color = 'secondary'" class="btn btn-secondary">&nbsp;</button>
              <button type="button" @click="editedDeck.color = 'danger'" class=" btn btn-danger">&nbsp;</button>
              <button type="button" @click="editedDeck.color = 'warning'" class=" btn btn-warning">&nbsp;</button>
              <button type="button" @click="editedDeck.color = 'success'" class=" btn btn-success">&nbsp;</button>
              <button type="button" @click="editedDeck.color = 'info'" class=" btn btn-info">&nbsp;</button>
              <button type="button" @click="editedDeck.color = 'white'" class=" btn btn-white">&nbsp;</button>
            </div>
          </div>

          <!-- Color Change -->

          <button type="submit" class="btn btn-warning">Submit Form</button>
        </form>

      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <button class="btn btn-danger my-1">Delete Deck</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'editDeck',
    data() {
      return {
        checked: '',
        editedDeck: {
          title: '',
          description: '',
          tags: '',
          color: ''
        }
      }
    },
    computed: {
      deck() {
        return this.$store.state.activeDeck
      }
    },
    methods: {
      editDeck() {
        let payload = {
          deck: {},
          deckId: this.deck._id
        }
        for (let prop in this.editedDeck) {
          if (this.editedDeck[prop]) {
            payload.deck[prop] = this.editedDeck[prop]
          }
        }
        if (this.checked == 'public') {
          payload.deck.public = true
        }
        if (this.checked == 'private') {
          payload.deck.public = false
        }
        this.$store.dispatch('editDeck', payload)
        this.$emit('finishedEditing')
      }
    },
    mounted() {
      console.log(this.$store.state.activeDeck)
    }
  }

</script>

<style>


</style>