<template>
  <BicycleHeader />
  <router-view />
</template>

<script setup>
import { provide } from "vue";
import { switchState, useBicycle } from "@/logic/common.js";
const { qq } = useBicycle();
provide("switchState", switchState);
provide("qq", qq);
</script>

<style></style>
