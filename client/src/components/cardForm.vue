<template>
  <div class="cardForm">
    <div class="row">
      <div class="col-12">

        <form @submit.prevent="addCard">
          <div class="form-group">
            <label for="cardFront">Card Front</label>
            <input type="text" class="form-control" name="cardFront" placeholder="Card Front" maxlength="250">
            <label for="cardBack">Card Back</label>
            <input type="text" class="form-control" name="cardBack" placeholder="Card Back" maxlength="250">
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

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>