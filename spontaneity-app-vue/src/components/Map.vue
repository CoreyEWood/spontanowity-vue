<template>
  <section>
    <div id="map" ref="map" class="w-auto">
      <!-- Map will insert here -->
    </div>
  </section>
</template>

<script>
  import {
    pointInCircle,
    getRandomInt
  } from '../helpers.js';
  import {
    config
  } from '../config.js';

  export default {
    name: 'Map',
    props: {
      range: Number
    },
    data() {
      return {
        // back-end data
        apiKey: config['api-key'],
        map: null,
        maxRadius: 4800, // radius values in meters
        minRadius: 800,
        nearbyPlaceDetails: {},
        service: null,
        userPosition: {},
      };
    },
    mounted() {
      this.setPosition();
      setTimeout(this.renderMap, 500);
    },
    methods: {
      // back-end methods
      nearbySearchAsPromise(request) {
        return new Promise((resolve) => {
          this.service.nearbySearch(request, (data) => {
            resolve(data);
          });
        });
      },
      async setRandomPlace() {
        let nearbyPlaces;

        while (!nearbyPlaces || !nearbyPlaces.length) {
          // get random position
          let latLngDict = this.getRandomPosition();
          // console.log(latLngDict);

          let type;

          if (this.inputs['location'] !== 'anywhere') {
            type = this.inputs['location'];
          }

          console.log(type);

          const request = {
            location: new window.google.maps.LatLng(latLngDict['lat'], latLngDict['lng']),
            radius: '10000', // radius in which to look for a place near the random location
            type: type
          };
          nearbyPlaces = await this.nearbySearchAsPromise(request);
        }

        let fields = ['url', 'name'];

        // below code goes into while loop to check for user inputted conditions
        // make sure is open now for relevant places

        let randInt = getRandomInt(nearbyPlaces.length);
        let newRandomPlace = nearbyPlaces[randInt];

        let detailsDict = await this.getPlaceDetails(newRandomPlace, fields);

        this.nearbyPlaceDetails = detailsDict;
      },
      getDetailsAsPromise(request) {
        return new Promise((resolve) => {
          this.service.getDetails(request, (data) => {
            resolve(data);
          });
        });
      },
      async getPlaceDetails(place, fields) {
        let detailsDict;
        while (!detailsDict || !Object.keys(detailsDict).length) {
          let details_request = {
            placeId: place.place_id,
            fields: fields
          };

          detailsDict = await this.getDetailsAsPromise(details_request);
        }

        return detailsDict;
      },
      getRandomPosition() {
        let randResult = pointInCircle({
          'latitude': this.userPosition['lat'],
          'longitude': this.userPosition['lng']
        }, this.minRadius, this.inputs['range']);
        this.randLatValue = randResult.latitude;
        this.randLongValue = randResult.longitude;
        return {
          'lat': randResult.latitude,
          'lng': randResult.longitude
        };
      },
      setPosition() {
        navigator.geolocation.getCurrentPosition((p) => {
          this.userPosition = {
            'lat': p.coords.latitude,
            'lng': p.coords.longitude
          }
        });
      },
      renderMap() {
        this.map = new window.google.maps.Map(this.$refs.map, this.mapConfig);
        new window.google.maps.Marker({
          position: {
            lat: this.userPosition['lat'],
            lng: this.userPosition['lng']
          },
          map: this.map
        });
        this.service = new window.google.maps.places.PlacesService(this.map);
      },
    },
    computed: {
      isGeolocation: function() {
        return 'geolocation' in navigator;
      },
      mapConfig: function() {
        return {
          center: {
            lat: this.userPosition['lat'],
            lng: this.userPosition['lng']
          },
          zoom: 15,
        }
      },
    }
  }
</script>

<style scoped>
  section {
    margin-right: 0px;
  }
</style>