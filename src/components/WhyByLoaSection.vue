<template>
  <section class="py-20 sm:py-28 bg-black relative z-10">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <!-- Título -->
      <div class="mb-20">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
          POR QUÉ BYLOA
        </h2>
      </div>

      <!-- Grid Editorial -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
        <!-- Card 1: Grande (2 cols, 2 rows) -->
        <div
          ref="cardsRefs"
          class="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 p-8 rounded-2xl backdrop-blur-sm bg-[#1A1A1A]/40 border border-[#F45EBB]/20 hover:border-[#F45EBB]/40 transition-colors"
        >
          <div class="h-full flex flex-col justify-between">
            <h3 class="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Enfoque estratégico
            </h3>
            <p class="text-base sm:text-lg text-white/70 leading-relaxed">
              Planificación profunda que entiende tu marca, contexto y objetivos reales.
            </p>
          </div>
        </div>

        <!-- Card 2: Mediana -->
        <div
          ref="cardsRefs"
          class="col-span-1 md:col-span-1 p-8 rounded-2xl backdrop-blur-sm bg-[#1A1A1A]/40 border border-[#FC94C7]/20 hover:border-[#FC94C7]/40 transition-colors"
        >
          <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">
            Procesos claros
          </h3>
          <p class="text-sm sm:text-base text-white/70">
            Metodología ordenada, sin improvisación.
          </p>
        </div>

        <!-- Card 3: Pequeña -->
        <div
          ref="cardsRefs"
          class="col-span-1 md:col-span-1 lg:col-span-1 p-6 rounded-2xl backdrop-blur-sm bg-[#1A1A1A]/40 border border-[#F45EBB]/20 hover:border-[#F45EBB]/40 transition-colors"
        >
          <h3 class="text-base sm:text-lg font-semibold text-white">
            Comunicación coherente
          </h3>
        </div>

        <!-- Card 4: Editorial Principal (2 cols) -->
        <div
          ref="cardsRefs"
          class="col-span-1 md:col-span-2 lg:col-span-2 p-10 rounded-2xl backdrop-blur-sm bg-[#1A1A1A]/40 border border-[#FC94C7]/20 hover:border-[#FC94C7]/40 transition-colors"
        >
          <p class="text-lg sm:text-2xl font-semibold text-white leading-relaxed">
            byloa.agency no es una agencia genérica.
            <span class="text-[#F45EBB]">Es un equipo que trabaja con criterio, planificación y visión a largo plazo.</span>
          </p>
        </div>

        <!-- Card 5: Pequeña -->
        <div
          ref="cardsRefs"
          class="col-span-1 md:col-span-1 lg:col-span-1 p-6 rounded-2xl backdrop-blur-sm bg-[#1A1A1A]/40 border border-[#F45EBB]/20 hover:border-[#F45EBB]/40 transition-colors"
        >
          <h3 class="text-base sm:text-lg font-semibold text-white">
            Estética cuidada
          </h3>
        </div>

        <!-- Card 6: Mediana -->
        <div
          ref="cardsRefs"
          class="col-span-1 md:col-span-1 lg:col-span-2 p-8 rounded-2xl backdrop-blur-sm bg-[#1A1A1A]/40 border border-[#FC94C7]/20 hover:border-[#FC94C7]/40 transition-colors"
        >
          <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">
            Experiencia en marcas, eventos y servicios
          </h3>
          <p class="text-sm sm:text-base text-white/70">
            Trayectoria sólida, relaciones profesionales duraderas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useWhyByLoaAnimation } from '../composables/useWhyByLoaAnimation'

const cardsRefs = ref([])

useWhyByLoaAnimation(cardsRefs)
</script>

<style scoped>
/* WhyByLoa section specific styles */
</style>
