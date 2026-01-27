<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 flex items-center justify-between px-8 sm:px-12 lg:px-20 py-6 transition-all duration-500 ease-out',
      isScrolled 
        ? 'bg-black/40 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    ]"
    style="z-index: 999999 !important"
  >
    <!-- Left: Logo -->
    <div class="text-2xl font-coolvetica font-bold text-white">
      <img src="/logotipos_logotipodescriptorv1 negativo.png" alt="ByLoa Agency" class="h-10 w-auto opacity-90">
    </div>

    <!-- Center: Navigation Links -->
    <div class="hidden lg:flex items-center gap-25 text-sm">
      <span class="flex items-center gap-2">
        <span class="text-white">•</span>
        <a href="#" class="text-white hover:text-gray-300 transition">Home</a>
      </span>
      <a href="#" class="text-gray-400 hover:text-gray-300 transition">About</a>
      <a href="#" class="text-gray-400 hover:text-gray-300 transition">Work</a>
      <a href="#" class="text-gray-400 hover:text-gray-300 transition">Services</a>
    </div>

    <!-- Right Side Navigation -->
    <div class="hidden lg:flex items-center gap-8 text-sm">
      <button class="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition">
        Contactar
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  const scrollPosition = window.scrollY
  isScrolled.value = scrollPosition > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
nav {
  z-index: 999999 !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  isolation: isolate !important;
}
</style>
