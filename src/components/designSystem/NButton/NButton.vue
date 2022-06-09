<script setup lang="ts">
import { computed, reactive, type ComputedRef } from 'vue'

const props = defineProps<{
  label: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}>()

const buttonHeight: ComputedRef = computed(() => {
  switch (props.size) {
    case 'small':
      return 'h-8 text-xs px-1 py-1'
    case 'medium':
    default:
      return 'h-12 text-base px-2 py-2'
    case 'large':
      return 'h-16 text-2xl px-4 py-4'
  }
})
</script>

<template>
  <button
    type="button"
    class="
      text-white
      bg-gradient-to-br from-purple-600 to-blue-500
      hover:bg-gradient-to-br hover:from-purple-700 hover:to-blue-600
      font-medium
      rounded-lg
      text-center
      butttooon
    "
    :class="[
      buttonHeight,
      props.disabled ? 'disabled:hover:bg-gradient-to-br disabled:hover:from-purple-600 disabled:hover:to-blue-500 disabled:opacity-60' : null,
    ]"
    :disabled="props.disabled"
  >
    {{ label }}
  </button>
</template>
