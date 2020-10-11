<template>
  <section id="activities">
    <h2>Your Location:</h2>
    <div v-if="location">
      <p>You'll be going to {{ location }}! </p>
      <a :href="url" target="_blank">Go to Google Maps!</a>
    </div>
    <div v-else>
      <p>Generating your random location...</p>
    </div>
    
    <br>
    <h2 id="secondHeading">Your Activity:</h2>
    <p>{{ activityResult }}</p>
  </section>
</template>

<script>
  import { getRandomInt } from '../helpers.js';
  export default {
    name: 'Activities',
    computed: {
      activityResult() {
        const result = [];
        // add all the general activities
        this.activities.general.forEach((value) => {
          result.push(value);
        });
        // add activities from appropriate list, or all lists if anywhere
        for (let locationValue of Object.keys(this.locations)) {
          if ((this.location == 'anywhere' || locationValue == this.location) && locationValue != 'anywhere') {
            this.activities[locationValue].forEach((value) => {
              result.push(value);
            });
          }
        }
        return result[getRandomInt(result.length)];
      }
    },
    data() {
      return {
        activities: {
          general: [
            'Say hi to the first person you see',
            'Do a flip, bro'
          ],
          library: [
            'Check out a book',
            'Ask the librarian to recommend a book',
            'Read a book on South American history',
            "Study in the library's reading room",
          ],
          park: [
            'Have a picnic',
            'Go for a walk',
            'Birdwatch',
            'Try to identify tree species',
            'Play hide and go seek'
          ],
          restaurant: [
            'Eat only appetizers',
            'Order every dessert',
            'Get something vegetarian',
            'Order the 5th thing on the menu'
          ],
        },
      }
    },
    props: {
      location: String,
      locations: Object,
      url: String,
    }
  }
</script>

<style scoped>
  section {
    margin-bottom: 50px;
    margin-left: 0px;
  }

  p {
    margin-bottom: 0.25em;
    margin-top: 0.25em
  }

  h2 {
    margin-top: 0.25em;
  }

  ul {
    text-align: left;
  }
</style>