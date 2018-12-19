<template>
  <div class="cardComp card row my-1 justify-content-end d-flex">
    <div class="col-6">front:{{cardData.front}}</div>
    <div class="col-6">back:{{cardData.back}}</div>
  </div>
</template>

<script>
  export default {
    name: 'cardComp',
    data() {
      return {

      }
    },
    computed: {},
    methods: {},
    props: ['cardData']
  }

</script>

<style>


</style>