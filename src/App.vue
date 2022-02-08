<template>
  <BicycleHeader/>
  <router-view />
</template>

<script setup>
import BicycleHeader from "@/components/BicycleHeader.vue";
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
