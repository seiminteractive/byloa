<template>
  <section class="py-24 sm:py-32 min-h-screen flex items-center bg-gradient-to-b from-transparent to-black relative z-10">

    <!-- <div class=" z-1 pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black"></div> -->
    <div class="container-md mx-auto px-4 w-full">
      <div class="text-center">
        <!-- Subtitle -->
        <div ref="subtitleRef" class="opacity-0 mb-6">
          <p class="text-xs tracking-widest uppercase text-gray-300">
            byloa.agency
          </p>
        </div>

        <!-- Main Title -->
        <div ref="titleRef" class="opacity-0 mb-8">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Hacemos que tu marca
            <span class="text-rose-500">destaque</span>
          </h1>
        </div>

        <!-- Description -->
        <div ref="descriptionRef" class="opacity-0 mb-10">
          <p class="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Estrategia, contenido y publicidad digital para marcas que buscan
            orden, coherencia y resultados reales.
          </p>
        </div>

        <!-- Features -->
        <div ref="featuresRef" class="mb-14 flex flex-wrap justify-center gap-3">
          <span class="px-3 py-1 text-xs text-gray-400 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            Marketing
          </span>
          <span class="px-3 py-1 text-xs text-gray-400 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            Redes
          </span>
          <span class="px-3 py-1 text-xs text-gray-400 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            Contenido
          </span>
          <span class="px-3 py-1 text-xs text-gray-400 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            Ads
          </span>
          <span class="px-3 py-1 text-xs text-gray-400 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            Web
          </span>
        </div>

        <!-- CTA Button -->
        <div ref="ctaRef" class="opacity-0">
          <button
            type="button"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-rose-500 rounded-full hover:bg-rose-600 transition"
          >
            Solicitar propuesta
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        <!-- Tagline -->
        <div ref="taglineRef" class="opacity-0 mt-16">
          <p class="text-xs text-gray-500">
            Comunicación pensada para crecer, no para improvisar.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHeroAnimation } from '../composables/useHeroAnimation'

const subtitleRef = ref(null)
const titleRef = ref(null)
const descriptionRef = ref(null)
const featuresRef = ref(null)
const ctaRef = ref(null)
const taglineRef = ref(null)

const elements = {
  subtitle: subtitleRef,
  title: titleRef,
  description: descriptionRef,
  features: featuresRef,
  cta: ctaRef,
  tagline: taglineRef
}

useHeroAnimation(elements)
</script>

<style scoped>
/* Header specific styles */
</style>
