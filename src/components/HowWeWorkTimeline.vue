<template>
  <section class="py-20 sm:py-28 bg-black relative z-10">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <!-- HEADER -->
      <div class="mb-20">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
          Cómo trabajamos
        </h2>
        <p class="text-lg sm:text-xl text-white/70 max-w-2xl">
          Un proceso claro, ordenado y estratégico en cada proyecto.
        </p>
      </div>

      <!-- TIMELINE CONTAINER -->
      <div ref="timelineContainer" class="relative">
        <!-- VERTICAL LINE (Desktop only) -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

        <!-- TIMELINE ITEMS -->
        <div class="space-y-12 sm:space-y-16 lg:space-y-20">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            data-timeline-item
            class="relative flex lg:gap-0 gap-8 items-start"
            :class="index % 2 === 0 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'"
          >
            <!-- CONTENT BLOCK -->
            <div
              data-content
              class="relative z-10 w-full lg:w-[45%]"
              :class="index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'"
            >
              <!-- Badge: PASO X -->
              <div
                data-badge
                class="inline-block mb-4 px-3 py-1 rounded-full border border-[#F45EBB]/40 bg-[#F45EBB]/10"
              >
                <span class="text-xs uppercase tracking-widest text-[#F45EBB] font-semibold">
                  Paso {{ index + 1 }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3 leading-tight">
                {{ step.title }}
              </h3>

              <!-- Description -->
              <p class="text-base sm:text-lg text-white/70 leading-relaxed max-w-md">
                {{ step.description }}
              </p>
            </div>

            <!-- DOT + CENTER LINE (Desktop only) -->
            <div class="hidden lg:flex w-[10%] items-start justify-center pt-8">
              <!-- Animated dot -->
              <div
                data-dot
                class="w-5 h-5 rounded-full border-2 border-[#F45EBB] bg-black/50 backdrop-blur-sm ring-4 ring-black/80"
              />
            </div>

            <!-- MOBILE DOT -->
            <div class="lg:hidden absolute left-0 top-0 w-8 h-8 flex items-center justify-center -ml-4">
              <div
                data-dot
                class="w-3 h-3 rounded-full bg-[#F45EBB]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHowWeWorkAnimation } from '../composables/useHowWeWorkAnimation'

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

const timelineContainer = ref(null)

useHowWeWorkAnimation(timelineContainer)
</script>

<style scoped>
/* Timeline section specific styles */
</style>
