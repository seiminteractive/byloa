<template>
  <section class="py-24 sm:py-32 bg-[#F2F0E3]">
    <div class="container-md mx-auto px-4">
      <div class="text-center">
        <!-- Subtitle -->
        <div ref="subtitleRef" class="opacity-0 mb-6">
          <p class="text-xs tracking-widest uppercase text-gray-400">
            byloa.agency
          </p>
        </div>

        <!-- Main Title -->
        <div ref="titleRef" class="opacity-0 mb-8">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight">
            Hacemos que tu marca
            <span class="text-rose-500">destaque</span>
          </h1>
        </div>

        <!-- Description -->
        <div ref="descriptionRef" class="opacity-0 mb-10">
          <p class="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Estrategia, contenido y publicidad digital para marcas que buscan
            orden, coherencia y resultados reales.
          </p>
        </div>

        <!-- Features -->
        <div ref="featuresRef" class="opacity-100 mb-14 flex flex-wrap justify-center gap-3">
          <span class="px-3 py-1 text-xs text-gray-500 border border-black/10 rounded-full">
            Marketing
          </span>
          <span class="px-3 py-1 text-xs text-gray-500 border border-black/10 rounded-full">
            Redes
          </span>
          <span class="px-3 py-1 text-xs text-gray-500 border border-black/10 rounded-full">
            Contenido
          </span>
          <span class="px-3 py-1 text-xs text-gray-500 border border-black/10 rounded-full">
            Ads
          </span>
          <span class="px-3 py-1 text-xs text-gray-500 border border-black/10 rounded-full">
            Web
          </span>
        </div>

        <!-- CTA Button -->
        <div ref="ctaRef" class="opacity-0">
          <button
            type="button"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-black/90 transition"
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
          <p class="text-xs text-gray-400">
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
