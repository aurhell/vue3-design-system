<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex flex-col text-center">
    <img
      alt="Vue logo"
      class="mx-auto mt-10"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <nav>
      <!-- <RouterLink to="/">Home</RouterLink> -->
    </nav>
  </header>

  <RouterView />
</template>

<style></style>
