<template>
  <header>
    <div id="heading">
      <h1 class="mt-3">Spontanowity</h1>
      <p>Explore new places!</p>
    </div>
    <div id="dropdown-description" class=" col-2">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          What even is this thing?
        </button>
        <div class="dropdown-menu p-4 text-muted" style="max-width: 350px;">
          <p class="mb-0">
            A website to help you be spontaneous!
          </p>
          <div class="dropdown-divider"></div>
          <p class="mb-1">
            1) pick a range
          </p>
          <p class="mb-1">
            2) get assigned a location
          </p>
          <p>
            3) go there!!
          </p>
          <a class="dropdown-item" href="https://hackathome.org/">hack@home</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style>
  #heading {
    border-bottom: 1px solid black;
  }

  #dropdown-description {
    margin-top: 5px;
  }
</style>