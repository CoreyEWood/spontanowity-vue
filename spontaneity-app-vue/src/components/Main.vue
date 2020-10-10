<template>
  <div id="main">
    <TheHeader />
    <div class="row">
      <div class="col-6">
        <Map :range="inputs.range" />
      </div>
      <div class="col-6">
        <Inputs @button-click="handleButtonClick" :range="inputs.range" :locations="locations" />
        <Activities :location="inputs.location" :locations="locations" />
      </div>
    </div>
    <!-- For debugging -->
    <section style="background-color: white;">
      <h2>Debugging info</h2>
      <p>Inputs: {{ inputs }}</p>
      <p>locations: {{ locations }}</p>
    </section>
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  section {
    margin: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  body {
    background-color: yellow;
  }

  #map,
  #activities,
  #inputs {
    background-color: white;
  }
</style>