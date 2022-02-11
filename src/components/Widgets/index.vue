<template>
<div class="search-wrapper" v-if="switchState!= ''">
  <bicycle>????</bicycle>
  <attractions/>
  <route/>
  <slot>wwwwwwwwwwwwwwwwwww</slot>

</div>
</template>
<script setup>
import { inject } from "vue";
const switchState = inject("switchState");
</script>

<style lang="postcss">
.search-wrapper {
  z-index: 400;
  @apply bg-white absolute top-20 left-10 rounded-lg drop-shadow-lg w-1/5 h-2/3 opacity-20
}
</style>