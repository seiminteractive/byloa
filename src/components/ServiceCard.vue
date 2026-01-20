<template>
  <div ref="cardRef" class="p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 hover:border-white/40 transition-colors duration-300">
    <div class="space-y-4">
      <!-- Title -->
      <h3 class="text-xl sm:text-2xl font-semibold text-white">
        {{ title }}
      </h3>

      <!-- Main description -->
      <p class="text-sm sm:text-base text-white/80 leading-relaxed">
        {{ mainDescription }}
      </p>

      <!-- Secondary description -->
      <p class="text-sm sm:text-base text-white/70 leading-relaxed">
        {{ secondaryDescription }}
      </p>
    </div>
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
    required: true
  }
})

defineEmits()
</script>

<style scoped>
/* Service card specific styles */
</style>
