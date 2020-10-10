<template>
  <section>
    <h1>Inputs</h1>
    <label for="range-button">Range:</label>
    <input id="range-button" type="number" v-model="range" />
    <button class="btn btn-success m-2" @click="$emit('button-click', range)">Enter</button>
  </section>
</template>

<script>
  export default {
    name: 'Inputs',
    data() {
      return {
        range: 5,
      }
    }
  }
</script>

<style>
</style>