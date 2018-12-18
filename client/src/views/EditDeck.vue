<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3>EDIT YOUR DECK</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label for="deckTitle">Deck Title</label>
            <input type="text" class="form-control" placeholder="Deck Title" name="deckTitle" :v-model="deck.title">
            <label for="deckDescription">Deck Description</label>
            <input type="text" class="form-control" placeholder="Deck Description" name="deckDescription">
            <label for="deckTags">Deck Tags</label>
            <input type="text" class="form-control" placeholder="Deck Tags" name="deckTags">
          </div>

          <fieldset class="form-group">
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input v-if="checked" @change="checked = 'public'" type="radio" class="form-check-input" name="public" value="public"
                  :checked="checked == 'public' ? true : false">
                <input v-else @change="checked = 'public'" type="radio" class="form-check-input" name="public" value="public"
                :checked="deck.public ? true : false">
                Public
              </label>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input v-if="checked" @change="checked = 'private'" type="radio" class="form-check-input" name="private" value="private"
                  :checked="checked == 'private' ? true : false">
                <input v-else @change="checked = 'private'" type="radio" class="form-check-input" name="private" value="private" :checked="!deck.public ? true : false">
                Private
              </label>
            </div>
          </fieldset>
          <button type="submit" class="btn btn-warning">Submit</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'editDeck',
    data() {
      return {
        checked: ''
      }
    },
    computed: {
      deck() {
        return this.$store.state.activeDeck
      }
    },
    methods: {},
    mounted() {
      console.log(this.$store.state.activeDeck)
    }
  }

</script>

<style>


</style>