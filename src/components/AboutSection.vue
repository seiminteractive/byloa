<template>
  <section ref="containerRef" class="py-20 sm:py-28 bg-black">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Column: Text -->
        <div>
          <!-- Title -->
          <div ref="titleRef" class="opacity-0 mb-8">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F2F0E3]">
              Quiénes somos
            </h2>
          </div>

          <!-- Description -->
          <div ref="descriptionRef" class="opacity-0 space-y-6">
            <p class="text-base sm:text-lg text-[#F2F0E3] leading-relaxed">
              byloa.agency es una agencia de marketing y comunicación que trabaja con marcas, emprendimientos y productoras que necesitan profesionalizar su presencia digital.
            </p>

            <p class="text-base sm:text-lg text-[#F2F0E3] leading-relaxed">
              Cada proyecto se aborda desde la estrategia, el criterio y la coherencia visual, entendiendo la comunicación como una herramienta clave para el crecimiento del negocio.
            </p>

            <p class="text-base sm:text-lg text-[#F2F0E3] leading-relaxed">
              No se aplican fórmulas genéricas.
            </p>

            <p class="text-base sm:text-lg text-[#F2F0E3] leading-relaxed">
              Cada marca tiene un contexto, un objetivo y una forma propia de comunicar.
            </p>
          </div>
        </div>

        <!-- Right Column: Logo -->
        <div ref="logoRef" class="opacity-0 flex items-center justify-center lg:justify-end">
          <img
            src="/logotipos_reduccionv1 negativo.png"
            alt="ByLoa Agency Logo"
            class="w-64 h-auto sm:w-72 lg:w-80 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAboutAnimation } from '../composables/useAboutAnimation'

const containerRef = ref(null)
const titleRef = ref(null)
const descriptionRef = ref(null)
const logoRef = ref(null)

const elements = {
  container: containerRef,
  title: titleRef,
  description: descriptionRef,
  logo: logoRef
}

useAboutAnimation(elements)
</script>

<style scoped>
/* About section specific styles */
</style>
