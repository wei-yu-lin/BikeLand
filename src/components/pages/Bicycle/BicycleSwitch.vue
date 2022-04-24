<template>
  <div class="rounded-full z-[400] w-64 h-14 flex justify-evenly bg-white">
    <button
      @click="toggleStateClass = 'bicycle'"
      :class="{
        toggleBtn: toggleStateClass == 'bicycle',
        unToggleBtn: toggleStateClass != 'bicycle',
      }"
    >
    <i-mdi-bicycle class="mr-1" />
      找單車
    </button>

    <button
      @click="toggleStateClass = 'parking'"
      :class="{
        toggleBtn: toggleStateClass == 'parking',
        unToggleBtn: toggleStateClass != 'parking',
      }"
    >
    <i-mdi-parking class="mr-1" />
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
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.03em;
  text-align: center;
  @apply rounded-full bg-[#738047] text-white my-[8px] px-7 translate-x-0 duration-1000 flex items-center;
}
.unToggleBtn{
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.03em;
  text-align: center;
  @apply  text-[#738047] my-[8px] px-7 flex items-center;
}
</style>


