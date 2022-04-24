<script setup>
import {Geolocation} from "@/logic/leaflet";
</script>

<template>
  <button class="geolocation" @click="Geolocation">
    <i-fa-solid:crosshairs />
    <span class="tooltiptext">點擊定位</span>
  </button>
</template>
