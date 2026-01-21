<template>
  <section class="py-20 sm:py-28 bg-white">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="mb-20 max-w-2xl">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black mb-6">
          Cómo trabajamos
        </h2>
        <p class="text-lg sm:text-xl text-gray-600">
          Un proceso claro, ordenado y estratégico en cada proyecto.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative">
        <!-- Vertical Line (Desktop only) -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2" />

        <!-- Timeline Items -->
        <div class="space-y-0">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            :ref="el => itemsRefs[index] = el"
            class="flex gap-8 mb-12 sm:mb-16 items-start"
            :class="index % 2 === 0 ? 'flex-row-reverse md:flex-row' : 'md:flex-row-reverse'"
          >
            <!-- Content Block -->
            <div class="w-full md:w-1/2 md:pr-8" :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'">
              <div class="space-y-3">
                <!-- Step Number (subtle) -->
                <div class="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Paso {{ index + 1 }}
                </div>

                <!-- Title -->
                <h3 class="text-2xl sm:text-3xl font-semibold text-black">
                  {{ step.title }}
                </h3>

                <!-- Description -->
                <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>

            <!-- Timeline Center (dot + line) -->
            <div class="hidden md:flex w-12 items-start justify-center pt-2">
              <div class="relative flex flex-col items-center">
                <!-- Dot -->
                <div class="w-3 h-3 bg-black rounded-full ring-4 ring-[#F2F0E3]" />
              </div>
            </div>

            <!-- Mobile Timeline (dot only) -->
            <div class="md:hidden absolute left-0 top-0 w-8 h-full flex items-start justify-center pt-2 -ml-6">
              <div class="w-2 h-2 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useTimelineScrollAnimation } from '../composables/useTimelineScrollAnimation'

const steps = [
  {
    id: 1,
    title: 'Análisis y diagnóstico',
    description: 'Relevamiento de marca, contexto y objetivos.'
  },
  {
    id: 2,
    title: 'Estrategia',
    description: 'Definición de mensaje, canales y enfoque de comunicación.'
  },
  {
    id: 3,
    title: 'Producción',
    description: 'Desarrollo de contenido alineado a la identidad y estrategia.'
  },
  {
    id: 4,
    title: 'Ejecución',
    description: 'Publicación, gestión y seguimiento.'
  },
  {
    id: 5,
    title: 'Optimización',
    description: 'Análisis de resultados y ajustes continuos.'
  }
]

const itemsRefs = reactive([])

onMounted(() => {
  useTimelineScrollAnimation(itemsRefs)
})
</script>

<style scoped>
/* Timeline section specific styles */
</style>
