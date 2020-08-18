

<template>
<v-container>
<l-map style="height: 350px" :zoom="zoom" :center="center"  @click="addMarker">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker  :lat-lng="marker">

    </l-marker>
  
</l-map>
<input v-model="latitud">
<input v-model="longitud">
</v-container>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
name:'MyAwesomeMap',

  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom: 14,
       center: L.latLng(-16.387195, -71.539816),
     // center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(-16.386, -71.538),
     // marker: L.latLng(47.412, -1.218),
      latitud:"",
      longitud:""
    };
  },
  methods: {
    addMarker(event) {
      this.latitud = event.latlng.lat.toString();
       this.longitud = event.latlng.lng.toString();
      this.marker=event.latlng;
    }
  }
}
</script>

