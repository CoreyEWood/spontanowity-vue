<template>
  <section>
    <h2>Map</h2>
    <p>The range for the map is {{ range }}</p>
  </section>
</template>

<script>
  export default {
    name: 'Map',
    props: {
      range: Number
    }
  }
</script>

<style scoped>
  section {
    margin-right: 0px;
  }
</style>