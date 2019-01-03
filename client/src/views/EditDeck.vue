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
            <label for="deckTags">Tags</label>
            <div class="row justify-content-center">
              <div v-for="tags in deck.tags.split(',')" class="tagStyle my-1 mx-1 shadow-sm">
                <div>
                  <i class="fas fa-times-circle" @click="removeTag(tags)"></i> {{tags}}
                </div>
              </div>
            </div>
            <input type="text" class="form-control" placeholder="Separate by comma" name="deckTags" v-model="editedDeck.tags">

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
            <div class="btn-group mr-2 mb-1 shadow" role="group" aria-label="First group">
              <button type="button" @click="editedDeck.color = 'secondary'" class="btn btn-secondary">&emsp;</button>
              <button type="button" @click="editedDeck.color = 'danger'" class=" btn btn-danger">&emsp;</button>
              <button type="button" @click="editedDeck.color = 'warning'" class=" btn btn-warning">&emsp;</button>
              <button type="button" @click="editedDeck.color = 'success'" class=" btn btn-success">&emsp;</button>
              <button type="button" @click="editedDeck.color = 'info'" class=" btn btn-info">&emsp;</button>
              <button type="button" @click="editedDeck.color = 'white'" class=" btn btn-light">&emsp;</button>
            </div>
          </div>
          <!-- Color Change -->

          <!-- card component -->
          <div class="col-12">

            <button type="button" @click="showCardForm = !showCardForm" class="btn my-1 pb-1"><i class="fas fa-2x fa-plus-circle"></i></button>

            <cardForm :deckId="deck._id" v-show="showCardForm"></cardForm>
            <cardComp v-for="card in deck.cards" :cardData="card" :isEditing="true"></cardComp>
          </div>
          <!-- card component -->

          <button type="submit" class="btn btn-warning mb-1"><i class="far fa-save"></i></button>
        </form>

      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <button @click="deleteDeck" class="btn btn-danger my-1"><i class="fas fa-times"></i> Delete Deck</button>
      </div>
    </div>
  </div>
</template>

<script>
  import cardComp from "@/components/card.vue"
  import cardForm from "@/components/cardForm.vue"

  export default {
    name: 'editDeck',
    data() {
      return {
        checked: '',
        editedDeck: {
          title: '',
          description: '',
          tags: this.$store.state.activeDeck.tags,
          color: ''
        },
        showCardForm: false
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
          if (this.editedDeck[prop] && prop != 'tags') {
            payload.deck[prop] = this.editedDeck[prop]
          }
          if (prop == 'tags') {
            if (!this.deck.tags.includes(this.editedDeck.tags)) {
              payload.deck.tags = this.deck.tags + ', ' + this.editedDeck.tags
              // remove duplicate tags
              payload.deck.tags = payload.deck.tags.split(',').filter(function (tag, i, allTags) {
                return i == allTags.indexOf(tag);
              }).join(',')
            }
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
      },
      deleteDeck() {
        this.$store.dispatch('deleteDeck', this.deck._id)
      },
      removeTag(tag) {
        console.log(this.editedDeck)
        this.editedDeck.tags = this.deck.tags
        this.editedDeck.tags = this.editedDeck.tags.replace(tag, '')
        if (this.editedDeck.tags[this.editedDeck.tags.length - 1] == ',') {
          let index = this.editedDeck.tags.lastIndexOf(',')
          this.editedDeck.tags = this.editedDeck.tags.slice(0, index)
        }
        if (this.editedDeck.tags[0] == ',') {
          this.editedDeck.tags = this.editedDeck.tags.slice(1, this.editedDeck.tags.length)
        }
        this.editedDeck.tags = this.editedDeck.tags.replace(',,', ',')
        let payload = {
          deckId: this.deck._id,
          deck: {
            tags: this.editedDeck.tags
          }
        }
        this.$store.dispatch('editDeck', payload)
      }
    },
    mounted() {
      console.log(this.$store.state.activeDeck)
    },
    components: {
      cardComp,
      cardForm
    }
  }

</script>

<style scoped>
  .btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    /* padding: 10px 16px; */
    border-radius: 50%;
    font-size: 24px;
    line-height: 1.33;
  }

  .fa-plus-circle {
    color: #343a40;
  }

  .fa-times-circle {
    color: darkgray
  }
</style>