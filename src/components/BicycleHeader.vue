<template>
  <header
    class="w-full flex justify-between items-center h-20 bg-smear-green p-4"
  >
    <router-link to="/">
      <i-custom-mainlogo />
    </router-link>
    <button class="header-button">
      <i-mdi-bicycle />
      <span>找單車</span>
    </button>
  </header>
</template>
<script setup></script>

<style lang="postcss">
.header-button {
  @apply bg-white hover:bg-cyan-600;
  > span {
    color: aqua;
  }
}
</style>
