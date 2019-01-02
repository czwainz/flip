<template>
  <div class="search-results container-fluid background">

    <div class="d-flex justify-content-center">
    </div>
    <div class="row">
      <div class="col-12">
        <h4> {{keyword}} </h4>
      </div>
    </div>

    <publicPages :decks="decks" :pageSize="8"></publicPages>
  </div>
</template>

<script>
  // @ is an alias to /src
  import publicPages from '@/components/publicPages.vue'

  export default {
    name: 'search-results',
    data() {
      return {
      }
    },
    mounted() { },
    components: {
      publicPages
    },
    computed: {
      decks() {
        return this.$store.state.searchedDecks
      },
      keyword() {
        return this.$store.state.keyword
      }
    },
    methods: {
    }
  }
</script>