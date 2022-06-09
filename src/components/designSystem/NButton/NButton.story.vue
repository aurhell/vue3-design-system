<script setup lang="ts">
import NButton from './NButton.vue'
</script>

<template>
  <Story title="Button">
    <Variant title="medium size (default)">
      <NButton label="Boite à cliquer" />
    </Variant>
    <Variant title="small size">
      <NButton label="Petite boite à cliquer" size="small" />
    </Variant>
    <Variant title="large size">
      <NButton label="GROSSE boite à cliquer" size="large" />
    </Variant>
    
  </Story>
</template>

<docs lang="md">
# My documentation

Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
