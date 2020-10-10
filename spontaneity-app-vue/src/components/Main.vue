<template>
  <div>
    <h1>Main Page</h1>
    <Map :range="range" />
    <Inputs @button-click="handleButtonClick" :range="range" />
  </div>
</template>

<script>
  import Inputs from './Inputs.vue'
  import Map from './Map.vue'

  export default {
    name: 'Main',
    components: {
      Inputs,
      Map
    },
    data() {
      return {
        range: 5,
      }
    },
    methods: {
      handleButtonClick(range) {
        this.range = range;
      }
    }
  }
</script>

<style>
</style>