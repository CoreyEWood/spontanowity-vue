<template>
  <section>
    <h2>Inputs</h2>
    <form @submit.prevent="$emit('button-click', range, location)">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Range</span>
        </div>
        <input type="number" class="form-control" placeholder="How many miles away are you willing to travel?" v-model="range">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Location Type</span>
        </div>
        <select class="form-control" v-model="location">
          <option value="anywhere">Anywhere!</option>
          <option value="library">Library</option>
          <option value="park">Park</option>
          <option value="restaurant">Restaurant</option>
        </select>
      </div>
      <div class="input-group mb-3">
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
      </div>
      <button class="btn btn-success m-2">Enter</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'Inputs',
    data() {
      return {
        range: 5,
        location: 'anywhere',
        prominence: 'huge',
        rating: 1,
      }
    }
  }
</script>

<style scoped>
  section {
    margin-left: 0px;
  }

  select {
    width: max-content;
  }
</style>