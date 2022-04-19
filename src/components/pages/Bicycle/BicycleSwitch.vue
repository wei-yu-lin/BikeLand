<template>
  <div class="rounded-full z-[400] w-[260px] h-14 flex justify-evenly bg-white">
    <button
      @click="toggleStateClass = 'bicycle'"
      :class="{ toggleBtn: toggleStateClass == 'bicycle' }"
    >
      找單車
    </button>

    <button
      @click="toggleStateClass = 'parking'"
      :class="{ toggleBtn: toggleStateClass == 'parking' }"
    >
      找車位
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
let toggleStateClass = ref("");
</script>

<style lang="postcss" scoped>
.toggleBtn {
  @apply rounded-full bg-[#738047] my-[8px] px-7 translate-x-0 duration-1000;
}
</style>
