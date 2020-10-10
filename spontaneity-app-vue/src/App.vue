<template>
  <Main />
</template>

<script>
  import Main from './components/Main.vue'

  export default {
    name: 'App',
    components: {
      Main
    },
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
</style>