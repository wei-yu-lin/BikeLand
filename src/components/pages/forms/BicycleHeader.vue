<template>
  <header
    class="w-full flex justify-between items-center h-20 bg-smear-green p-4"
  >
    <router-link to="/">
      <i-custom-mainlogo />
    </router-link>
    <div class="flex space-x-3.5">
      <button class="btn-header" @click="switchState = 'bicycle'">
        <i-mdi-bicycle class="mr-1" />
        <span>找單車</span>
      </button>
      <button class="btn-header" @click="switchState = 'route'">
        <i-faSolid-route class="mr-1" />
        <span>找路線</span>
      </button>
      <button class="btn-header" @click="switchState = 'attractions'">
        <i-fa-umbrella class="mr-1" />
        <span>找景點</span>
      </button>
    </div>
  </header>
</template>
<script setup>
import { inject } from "vue";
const switchState = inject("switchState");
</script>

<style lang="postcss"></style>
