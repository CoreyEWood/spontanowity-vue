<template>
  <div id="main">
    <TheHeader />
    <p>The range is {{ inputs.range }}</p>
    <div class="row">
      <div class="col-6">
        <Map :range="inputs.range" />
      </div>
      <div class="col-6">
        <Inputs @button-click="handleButtonClick" :range="inputs.range" :locations="locations" />
        <Activities :location="inputs.location" :locations="locations" />
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
        inputs: {
          range: 5,
          location: 'anywhere',
          prominence: 'huge',
          rating: '1',
        },
        locations: { // dictionary of value name to display name
          'anywhere': 'Anywhere!',
          'library': 'Library',
          'park': 'Park',
          'restaurant': 'Restaurant',
        },
      }
    },
    methods: {
      handleButtonClick(range, location, prominence, rating) {
        this.inputs = {
          range: range,
          location: location,
          prominence: prominence,
          rating: rating,
        };
      }
    }
  }
</script>

<style>
</style>