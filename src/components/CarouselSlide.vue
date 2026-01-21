<template>
  <div class="swiper-slide">
    <div class="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden bg-gray-900">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />

      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      <!-- Content -->
      <div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <h3 class="text-lg sm:text-xl font-semibold text-white">
          {{ title }}
        </h3>
        <p v-if="description" class="text-sm sm:text-base text-white/80 mt-2">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
/* Carousel slide specific styles */
</style>
