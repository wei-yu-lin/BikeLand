<script setup>
import { inject, onMounted } from "vue";
import { useLocation } from "@/logic/leaflet";
const switchState = inject("switchState");

onMounted(() => {
  useLocation();
});
</script>

<template>
  <main class="relative">
    <div id="map" class="h-screen w-full" />

    <div class="absolute top-10 left-10 flex space-x-10 h-[0px]">
      <template v-if="switchState == 'bicycle'">
        <HeaderBicycle />
      </template>
      <template v-else-if="switchState == 'route'">
        <HeaderRoute />
      </template>
      <template v-else-if="switchState == 'attractions'">
        <HeaderAttractions />
      </template>
    </div>
  </main>
</template>

<style lang="postcss">
.geolocation {
  padding: 15px;
  width: 60px;
  height: 60px;
  @apply z-[400] flex justify-center items-center bg-[#738047] rounded-full hover:bg-[#474F2C];
}

.tooltiptext {
  z-index: 400;
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 7px;
  position: absolute;
}
.qq {
  z-index: 400;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #de994a transparent;
}

.geolocation:hover .tooltiptext {
  @apply bg-[#DE994A] z-[400] visible;
}
</style>
