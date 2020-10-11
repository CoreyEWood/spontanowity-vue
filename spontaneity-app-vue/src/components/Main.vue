<template>
  <div id="main">
    <TheHeader />
    <div class="row">
      <div class="col-6">
        <Map />
      </div>
      <div class="col-6">
        <Inputs @button-click="handleButtonClick" :range="inputs.range" :locations="locations" />
        <Activities :location="inputs.location" :locations="locations" />
      </div>
    </div>
    <!-- For debugging -->
    <section>
      <h2>Debugging info</h2>
      <p>Inputs: {{ inputs }}</p>
      <p>locations: {{ locations }}</p>
    </section>
  </div>
</template>

<script>
  import Activities from "./Activities.vue";
  import Inputs from "./Inputs.vue";
  import Map from "./Map.vue";
  import TheHeader from "./TheHeader.vue";

  export default {
    name: "Main",
    components: {
      Activities,
      Inputs,
      Map,
      TheHeader,
    },
    data() {
      return {
        // front-end data
        inputs: {
          range: 10000,
          location: "anywhere",
          prominence: "huge",
          rating: "1",
        },
        locations: {
          // dictionary of value name to display name
          anywhere: "Anywhere!",
          library: "Library",
          park: "Park",
          restaurant: "Restaurant",
        },
      };
    },
    methods: {
      // front-end methods
      handleButtonClick(range, location, prominence, rating) {
        this.inputs = {
          range: range,
          location: location,
          prominence: prominence,
          rating: rating,
        };
        this.setRandomPlace();
      },
    },
  };
</script>

<style>
  body {
    background-color: yellow;
  }

  #app {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    text-align: center;
    /* color: #303030; */
    color: #505050;
  }

  h1,
  h2 {
    font-family: "Arial Black", Gadget, sans-serif
  }

  section {
    margin: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    background-color: white;
    /* background-color: #303030;
    color: white; */
  }

  #map {
    height: 600px;
    width: 600px;
    margin: auto;
    background: gray;
  }

  /* #heading {
    background-color: white;
  } */

  /* section h2 {
    background-color: white;
    color: #303030;
    border-radius: 3px;
    padding: 0.2em;
    width: fit-content;
  } */

  /* section p {
    color: white;
  } */

  /* 
  #05386b
  #379683
  #5cdb95
  #8ee4af
  #edf5e1
   */
</style>