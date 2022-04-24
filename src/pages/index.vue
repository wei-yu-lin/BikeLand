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


