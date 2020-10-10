<template>
  <section id="activities">
    <h2>Activities</h2>
    <ul>
      <li v-for="activity in activitiesList" :key="activity">{{ activity }}</li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Activities',
    computed: {
      activitiesList() {
        const result = [];
        // add all the general activities
        this.activities.general.forEach((value) => {
          result.push(value);
        });
        // add activities from appropriate list, or all lists if anywhere
        console.log(Object.keys(this.locations));
        for (let locationValue of Object.keys(this.locations)) {
          if ((this.location == 'anywhere' || locationValue == this.location) && locationValue != 'anywhere') {
            this.activities[locationValue].forEach((value) => {
              result.push(value);
            });
          }
        }
        return result;
      }
    },
    watch: {
      location(value) {
        console.log(value);
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
            'Library'
          ],
          park: [
            'Park'
          ],
          restaurant: [
            'Restaurant'
          ],
        },
      }
    },
    props: {
      location: String,
      locations: Object
    }
  }
</script>

<style scoped>
  section {
    margin-left: 0px;
  }

  ul {
    text-align: left;
  }
</style>