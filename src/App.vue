<template>
  <BicycleHeader />
  <router-view />
</template>

<script setup>
import { provide } from "vue";
import { switchState, useBicycle } from "@/logic/common.js";
const { searchBicycle, bikeLand_Bicycle } = useBicycle();
provide("switchState", switchState);
provide("searchBicycle", searchBicycle);
provide("bikeLand_Bicycle", bikeLand_Bicycle);
</script>

<style></style>
