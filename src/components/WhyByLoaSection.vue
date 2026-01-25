<template>
  <section class="py-20 sm:py-28 bg-black relative z-10">

    <!-- CONTENEDOR COMÚN -->
    <div class="container-lg mx-auto px-4 sm:px-6">

      <!-- TÍTULO -->
      <div class="mb-20">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
          POR QUÉ BYLOA
        </h2>
      </div>

      <!-- GRID (MISMO ANCHO QUE EL TÍTULO) -->
      <div
        ref="cardsRefs"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6"
      >

        <!-- CARD 1 -->
        <div
          class="
            lg:col-span-2 lg:row-span-2
            p-8 sm:p-10 rounded-[32px]
            backdrop-blur-md
            bg-linear-to-br from-white/8 via-white/4 to-transparent
            border border-white/10
            shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_24px_48px_rgba(0,0,0,0.65)]
            flex flex-col justify-between
          "
        >
          <div class="w-12 h-12 rounded-full bg-[#F45EBB]/20 border border-[#F45EBB]/40 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-[#F45EBB]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1C5.03 1 1 5.03 1 10s4.03 9 9 9 9-4.03 9-9S14.97 1 10 1z"/>
            </svg>
          </div>

          <div>
            <h3 class="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Enfoque estratégico
            </h3>
            <p class="text-white/70">
              Planificación profunda que entiende tu marca, contexto y objetivos reales.
            </p>
          </div>
        </div>

        <!-- CARD 2 -->
        <div
          class="
            p-6 sm:p-8 rounded-[24px]
            backdrop-blur-md
            bg-linear-to-br from-white/6 to-transparent
            border border-white/10
          "
        >
          <h3 class="text-lg font-semibold text-white mb-2">
            Procesos claros
          </h3>
          <p class="text-sm text-white/70">
            Metodología ordenada, sin improvisación.
          </p>
        </div>

        <!-- CARD 3 -->
        <div
          class="
            p-6 sm:p-8 rounded-[24px]
            backdrop-blur-md
            bg-linear-to-br from-white/7 to-transparent
            border border-white/10
            flex
          "
        >
          <div class="w-[2px] h-20 bg-linear-to-b from-[#F45EBB] to-transparent mr-4"></div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">
              Comunicación coherente
            </h3>
            <p class="text-sm text-white/70">
              Todo tu ecosistema digital alineado.
            </p>
          </div>
        </div>

        <!-- CARD 4 -->
        <div
          class="
            p-6 sm:p-8 rounded-[24px]
            backdrop-blur-md
            bg-linear-to-br from-white/6 to-transparent
            border border-white/10
          "
        >
          <h3 class="text-lg font-semibold text-white">
            Experiencia multisectorial
          </h3>
          <p class="text-sm text-white/70 mt-2">
            Marcas, eventos y servicios premium.
          </p>
        </div>

        <!-- CARD 5 -->
        <div
          class="
            lg:col-span-2
            p-8 sm:p-10 rounded-[36px]
            backdrop-blur-lg
            bg-linear-to-br from-white/9 via-white/4 to-transparent
            border border-white/10
          "
        >
          <p class="text-lg sm:text-xl font-semibold text-white">
            <span class="text-[#F45EBB]">“byloa.agency no es una agencia genérica.”</span>
            <span class="block mt-3">
              Es un equipo con criterio y visión a largo plazo.
            </span>
          </p>
        </div>

      </div>
    </div>
  </section>
</template>



<script setup>
import { ref } from 'vue'
import { useGridAnimation } from '../composables/useGridAnimation'

const cardsRefs = ref(null)
useGridAnimation(cardsRefs)
</script>


<style scoped>
/* Sin cambios estructurales */
</style>
