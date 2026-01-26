<template>
  <div
    class="opacity-0 flex gap-8 mb-12 sm:mb-16 items-start"
    :class="isLeft ? 'flex-row-reverse md:flex-row' : 'md:flex-row-reverse'"
  >
    <!-- Content Block -->
    <div class="w-full md:w-1/2 md:pr-8" :class="isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'">
      <div class="space-y-3">
        <!-- Step Number (subtle) -->
        <div class="text-xs uppercase tracking-widest text-gray-400 font-semibold">
          Paso {{ number }}
        </div>

        <!-- Title -->
        <h3 class="text-2xl sm:text-3xl font-semibold text-white">
          {{ title }}
        </h3>

        <!-- Description -->
        <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- Timeline Center (dot + line) -->
    <div class="hidden md:flex w-12 items-start justify-center pt-2">
      <div class="relative flex flex-col items-center">
        <!-- Dot -->
        <div class="w-3 h-3 bg-white rounded-full ring-4 ring-black/20" />
      </div>
    </div>

    <!-- Mobile Timeline (dot only) -->
    <div class="md:hidden absolute left-0 top-0 w-8 h-full flex items-start justify-center pt-2 -ml-6">
      <div class="w-2 h-2 bg-white rounded-full" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isLeft: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* TimelineItem specific styles */
</style>
