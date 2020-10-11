<template>
  <div id="main" class="container-fluid">
    <TheHeader />
    <!-- <div class="row justify-content-center">
      <div class="col-12">
      </div>
    </div> -->
    <div class="row">
      <div class="col-6">
        <section>
          <div class="w-auto" id="map" ref="map">
            <!-- Map inserted here -->
          </div>
        </section>
      </div>
      <div class="col-6">
        <Activities :location="nearbyPlaceDetails.name" :url="nearbyPlaceDetails.url" :locations="locations" />
        <Inputs @button-click="handleButtonClick" :locations="locations" />
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
  import TheHeader from "./TheHeader.vue";
  import {
    pointInCircle,
    getRandomInt,
    milesToMeters
  } from '../helpers.js';
  import {
    config
  } from '../config.js';
  export default {
    name: "Main",
    components: {
      Activities,
      Inputs,
      TheHeader,
    },
    data() {
      return {
        // back-end data
        apiKey: config['api-key'],
        map: null,
        nearbyPlaceDetails: {},
        placeMarker: null,
        service: null,
        userMarker: null,
        userPosition: {},
        // front-end data
        inputs: {
          maxRange: 3,
          minRange: 1,
          location: "anywhere",
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
    mounted() {
      this.setPosition();
      setTimeout(this.renderMap,500);
      setTimeout(this.setRandomPlace,1000);
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
        if (this.placeMarker) {
          this.renderMap();
        }
        let nearbyPlaces;

        let counter = 0;

        let radius = 1500;

        while (!nearbyPlaces || !nearbyPlaces.length) {
          console.log('trying to get random position');
          // get random position
          let latLngDict = this.getRandomPosition(milesToMeters(this.inputs['minRange']), milesToMeters(this.inputs['maxRange']));

          let type = this.chosenLocation;

          console.log(radius);

          const request = {
            location: new window.google.maps.LatLng(latLngDict['lat'], latLngDict['lng']),
            radius: radius, // radius in which to look for a place near the random location
            type: type
          };

          nearbyPlaces = await this.nearbySearchAsPromise(request);

          counter ++;
          console.log(counter)
          if (counter > 150) {
            console.log('resetting counter');
            radius += 1500;
            counter = 0;
          }
        }

        let fields = ['url', 'name', 'type'];

        let randInt = getRandomInt(nearbyPlaces.length);
        let newRandomPlace = nearbyPlaces[randInt];

        while (newRandomPlace.type !== 'library' || newRandomPlace.type !== 'restaurant' || newRandomPlace.type !== 'park') {
            getRandomInt(nearbyPlaces.length);
            newRandomPlace = nearbyPlaces[randInt];
        }

        let detailsDict = await this.getPlaceDetails(newRandomPlace, fields);

        this.nearbyPlaceDetails = detailsDict;

        this.placeMarker = new window.google.maps.Marker({
          position: {
            lat: newRandomPlace.geometry.location.lat(),
            lng: newRandomPlace.geometry.location.lng()
          },
          map: this.map,
          title: this.nearbyPlaceDetails['name'],
        });


        let latLngUser = new window.google.maps.LatLng(this.userPosition['lat'], this.userPosition['lng']);
        let latLngRandom = new window.google.maps.LatLng(newRandomPlace.geometry.location.lat(), newRandomPlace.geometry.location.lng());

        let bounds = new window.google.maps.LatLngBounds(latLngUser, latLngRandom);

        let centerLat = (this.userPosition['lat'] + newRandomPlace.geometry.location.lat()) / 2;
        let centerLng = (this.userPosition['lng'] + newRandomPlace.geometry.location.lng()) / 2;

        let center = new window.google.maps.LatLng(centerLat, centerLng);

        this.map.fitBounds(bounds);

        let zoom = this.map.getZoom();

        let minZoom;

        if (this.inputs['maxRange'] <= 3) {
          minZoom = 11;
        } else if (this.inputs['maxRange'] <= 8) {
          minZoom = 11;
        } else if (this.inputs['maxRange'] <= 10) {
          minZoom = 10;
        } else if (this.inputs['maxRange'] <= 12) {
          minZoom = 9;
        } else {
          minZoom = 6;
        }

        this.map.setZoom(zoom < minZoom ? minZoom : zoom);

        this.map.setCenter(center);

        console.log(this.map.getZoom());
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
      getRandomPosition(min, max) {
        let randResult = pointInCircle({
          'latitude': this.userPosition['lat'],
          'longitude': this.userPosition['lng']
        }, min, max);
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
        let m = new window.google.maps.Marker({
          position: {
            lat: this.userPosition['lat'],
            lng: this.userPosition['lng']
          },
          map: this.map
        });
        this.userMarker = m;

        this.service = new window.google.maps.places.PlacesService(this.map);
      },
      // front-end methods
      handleButtonClick(minRange, maxRange, location) {
        this.inputs = {
          minRange: minRange,
          maxRange: maxRange,
          location: location,
        };
        this.setRandomPlace();
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
      chosenLocation: function () {
        if (this.inputs.location == 'anywhere') {
          // randomize another location (i.e library)
          const availLocations = Object.keys(this.locations);
          availLocations.shift();
          return availLocations[getRandomInt(availLocations.length)]
        } 
        else {
          return this.inputs.location;
        }
      }
    }
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
    height: 550px;
    width: 600px;
    margin: auto;
    margin-right: 0px;
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