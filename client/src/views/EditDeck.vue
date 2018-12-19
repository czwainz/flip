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
            <label for="deckTitle">Deck Title</label>
            <input type="text" class="form-control" placeholder="Deck Title" name="deckTitle" v-model="editedDeck.title">
            <label for="deckDescription">Deck Description</label>
            <input type="text" class="form-control" placeholder="Deck Description" name="deckDescription" v-model="editedDeck.description">
            <label for="deckTags">Deck Tags</label>
            <input type="text" class="form-control" placeholder="Deck Tags" name="deckTags" v-model="editedDeck.tags">
            <p>{{editedDeck.tags}}</p>

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
          </div>

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
        debugger
        let payload = {
          deck: this.editedDeck,
          deckId: this.deck._id
        }
        this.$store.dispatch('editDeck', payload)
      }
    },
    mounted() {
      console.log(this.$store.state.activeDeck)
    }
  }

</script>

<style>


</style>