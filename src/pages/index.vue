<template>
  <main class="relative">
    <div id="map" class="h-screen w-full" />
    <div class="search-wrapper" v-if="switchState != ''">
      {{ switchState }}
      <template v-if="switchState == 'bicycle'">
        <Bicycle />
      </template>
      <template v-else-if="switchState == 'route'">
        <Route />
      </template>
      <template v-else-if="switchState == 'attractions'">
        <Attractions />
      </template>
    </div>
  </main>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { onMounted, inject } from "vue";

const switchState = inject("switchState");

onMounted(() => {
  const map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: import.meta.env.VITE_API_ACCESSTOKEN,
    }
  ).addTo(map);

  var marker = L.marker([51.5, -0.09]).addTo(map);
  var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
});
</script>

<style lang="postcss">
.search-wrapper {
  z-index: 400;
  @apply bg-white absolute top-0 left-10 rounded-lg drop-shadow-lg w-1/4 h-3/4 animate-pulse;
}
</style>
