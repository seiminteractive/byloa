<template>
  <div
    class="
      p-6 sm:p-8
      rounded-[24px]
     
      flex flex-col h-full
    "
  >
    <!-- Title -->
    <h3 class="text-lg font-semibold text-white mb-3">
      {{ title }}
    </h3>

    <!-- Main description -->
    <p class="text-sm text-white/70 leading-relaxed mb-4">
      {{ mainDescription }}
    </p>

    <!-- Secondary description -->
    <p v-if="secondaryDescription" class="text-xs text-white/60 leading-relaxed mt-auto">
      {{ secondaryDescription }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  mainDescription: {
    type: String,
    required: true
  },
  secondaryDescription: {
    type: String,
    default: ''
  }
})

defineEmits()
</script>

<style scoped>
/* Service card specific styles */
</style>
