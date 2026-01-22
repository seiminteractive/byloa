<template>
  <div
    ref="container"
    class="fixed inset-0 bg-black overflow-hidden pointer-events-none"
    style="z-index: 1; top: 0; left: 0; width: 100%; height: 100%"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useAnimatedLandingBackground } from '../composables/useAnimatedLandingBackground'

const container = ref(null)

useAnimatedLandingBackground(container)
</script>

<style scoped>
/* Landing background wrapper - minimal styles */
</style>
