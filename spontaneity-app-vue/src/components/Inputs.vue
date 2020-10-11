<template>
  <section id="inputs">
    <h2>Change the parameters!</h2>
    <form @submit.prevent="handleButtonClick">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Minimum Range (mi)</span>
        </div>
        <input type="number" class="form-control" placeholder="Minimum distance you want to travel?" v-model="minRange">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Maximum Range (mi)</span>
        </div>
        <input type="number" class="form-control" placeholder="How many miles away are you willing to travel?" v-model="maxRange">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Location Type</span>
        </div>
        <select class="form-control" v-model="location">
          <!-- <option disabled value="default">Type of location?</option> -->
          <option v-for="locationValue in Object.keys(locations)" :key="locationValue" :value="locationValue">{{ locations[locationValue] }}</option>
        </select>
      </div>
      <!-- <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Prominence</span>
        </div>
        <select class="form-control" v-model="prominence">
          <option value="huge">HUGE</option>
          <option value="large">Large</option>
          <option value="smol">Smol</option>
          <option value="miniscyool">Miniscyool</option>
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Minimum star rating</span>
        </div>
        <input type="number" class="form-control" min="1" max="5" v-model="rating">
      </div> -->
      <button class="btn btn-success m-2">Generate</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'Inputs',
    data() {
      return {
        maxRange: 3,
        minRange: 1,
        location: 'anywhere',
      }
    },
    methods: {
      handleButtonClick() {
        // Cast ranges to numbers
        this.minRange = Number(this.minRange);
        this.maxRange = Number(this.maxRange);
        // Ensure than minRange is not less than zero
        if (this.minRange < 0 || this.minRange === '') {
          this.minRange = 0;
        }
        // Ensure that max range is not less than min range
        if (this.maxRange <= this.minRange + 1 || this.maxRange === '') {
          this.maxRange = this.minRange + 1;
        }
        this.$emit('button-click', this.minRange, this.maxRange, this.location)
      },
    },
    props: {
      locations: Object
    },
  }
</script>

<style scoped>
  section {
    margin-left: 0px;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  select {
    width: max-content;
  }

  .input-group-text {
    width: 170px;
    /* display: block; */
  }
</style>