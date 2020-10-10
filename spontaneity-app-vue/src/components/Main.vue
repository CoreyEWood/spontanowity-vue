<template>
  <div>
    <TheHeader />
    <p>The range is {{ range }}</p>
    <div class="row">
      <div class="col-6">
        <Map :range="range" />
      </div>
      <div class="col-6">
        <Inputs @button-click="handleButtonClick" :range="range" />
        <Activities />
      </div>
    </div>
  </div>
</template>

<script>
  import Activities from './Activities.vue'
  import Inputs from './Inputs.vue'
  import Map from './Map.vue'
  import TheHeader from './TheHeader.vue'

  export default {
    name: 'Main',
    components: {
      Activities,
      Inputs,
      Map,
      TheHeader
    },
    data() {
      return {
        range: 5,
        location: 'anywhere',
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