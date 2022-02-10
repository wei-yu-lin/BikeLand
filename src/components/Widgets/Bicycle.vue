<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-row">
      <div class="input-group">
        <input
          class="search-input relative"
          placeholder="搜尋站點或鄰近地點"
          type="text"
          name="search"
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg class="h-5 w-5 fill-gray-50"><i-ic-twotone-search /></svg>
        </span>
      </div>

      <button
        class="flex text-sm items-center px-1 whitespace-nowrap bg-white text-smear-green font-bold rounded border-2 ease-in-out duration-300 border-smear-green  hover:drop-shadow-md  active:bg-smear-green active:text-white"
      >
      <i-fa-solid-sort-amount-down class="mr-1"/>
        排序
      </button>
    </div>
  </div>
</template>

<script setup>

import { ref,inject } from "vue";

const qq = inject("qq");
console.log(qq());
</script>

<style lang="postcss">
.search-input {
  @apply placeholder:italic placeholder:text-slate-400 bg-slate-200 w-full border mr-2 border-slate-300 rounded-md pl-3 pr-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm;
}
.input-group {
  @apply relative flex flex-wrap items-stretch w-full
}
</style>
