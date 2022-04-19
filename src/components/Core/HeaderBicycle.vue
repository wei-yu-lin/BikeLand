<template>
    <BicycleList />
    <BicycleSwitch />
    <BicyclePosition />
</template>

<script setup>
import { inject,onMounted } from "vue";
import { generateMarker } from "@/logic/leaflet";
const searchBicycle = inject("searchBicycle");
const bikeLand_Bicycle = inject("bikeLand_Bicycle");
onMounted(async()=>{
  await searchBicycle({
    city: "Kaohsiung",
    filter: "AvailableRentBikes gt 0 ",
  });
  generateMarker(bikeLand_Bicycle);
})

</script>
