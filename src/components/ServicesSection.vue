<template>
  <section class="py-20 sm:py-28 bg-black relative z-10">
    <div class="container-lg mx-auto px-4 sm:px-6">

      <!-- TÍTULO -->
      <div class="mb-20">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
          QUÉ HACEMOS
        </h2>
      </div>

      <!-- SUBTÍTULO -->
      <div class="mb-16 max-w-3xl">
        <p class="text-lg sm:text-xl text-white/80">
          Diseñamos sistemas de comunicación claros, funcionales y sostenibles.
        </p>
      </div>

      <!-- SERVICES GRID -->
      <div
        ref="cardsRef"
        class="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          lg:grid-rows-3
          gap-6
        "
      >
        <!-- CARD 1 · PRINCIPAL -->
        <div
          class="
            lg:col-start-1 lg:col-span-2 lg:row-start-1
            rounded-[32px]
            backdrop-blur-md
            bg-linear-to-br from-white/8 via-white/4 to-transparent
            border border-white/10
            relative
            flex
            flex-col
          "
        >
          <!-- Punto rosa -->
          <div class="absolute top-6 left-6">
            <div
              class="
                w-12 h-12 rounded-full
                bg-[#F45EBB]/20
                border border-[#F45EBB]/40
                flex items-center justify-center
              "
            >
              <span class="w-2.5 h-2.5 rounded-full bg-[#F45EBB]" />
            </div>
          </div>

          <!-- Empujador vertical (no afecta ancho) -->
          <div class="flex-1"></div>

          <!-- Contenido: MISMO width, solo abajo -->
          <div>
            <ServiceCard v-bind="services[0]" />
          </div>
        </div>


        <!-- CARD 2 -->
        <div
          class="
            lg:col-start-3 lg:row-start-1
            rounded-[24px]
            backdrop-blur-md
            bg-linear-to-br from-white/6 to-transparent
            border border-white/10
          "
        >
          <ServiceCard v-bind="services[1]" />
        </div>

        <!-- CARD 5 · HORIZONTAL -->
        <div
          class="
            lg:col-start-1 lg:col-span-3 lg:row-start-2
            rounded-[36px]
            backdrop-blur-lg
            bg-linear-to-br from-white/9 via-white/4 to-transparent
            border border-white/10
          "
        >
          <ServiceCard v-bind="services[2]" />
        </div>

        <!-- CARD 3 · LÍNEA ROSA -->
        <div
            class="
              lg:col-start-1 lg:row-start-3
              rounded-[24px]
              backdrop-blur-md
              bg-linear-to-br from-white/7 to-transparent
              border border-white/10
            "
          >
            <!-- CONTENIDO -->
            <div class="flex items-start gap-4 p-8">
              
              <!-- Línea rosa -->
              <div class="w-[2px] h-24 bg-linear-to-b from-[#F45EBB] to-transparent shrink-0"></div>

              <!-- Texto -->
              <ServiceCard v-bind="services[4]" />

            </div>
          </div>

        <!-- CARD 4 · EXTENDIDA -->
        <div
          class="
            lg:col-start-2 lg:col-span-2 lg:row-start-3
            rounded-[24px]
            backdrop-blur-md
            bg-linear-to-br from-white/6 to-transparent
            border border-white/10
          "
        >
          <ServiceCard v-bind="services[3]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from './ServiceCard.vue'
import { useGridAnimation } from '../composables/useGridAnimation'

const services = [
  {
    title: 'Gestión de redes sociales',
    mainDescription:
      'Estrategia de contenidos, planificación mensual, creación de piezas y community management.',
    secondaryDescription:
      'Construimos presencia, posicionamiento y coherencia de marca.'
  },
  {
    title: 'Creación de contenido',
    mainDescription:
      'Producción de contenido orgánico, reels y piezas visuales con dirección creativa y estética cuidada.',
    secondaryDescription:
      'Contenido pensado para comunicar, conectar y convertir.'
  },
  {
    title: 'Publicidad digital (Google Ads & Meta Ads)',
    mainDescription:
      'Planificación y gestión de campañas publicitarias en Google Ads y Meta Ads.',
    secondaryDescription:
      'Segmentación, análisis de métricas y optimización continua.'
  },
  {
    title: 'Branding & comunicación',
    mainDescription:
      'Definición del mensaje de marca, identidad visual y lineamientos.',
    secondaryDescription:
      'Marcas claras, coherentes y profesionales.'
  },
  {
    title: 'Web & landings',
    mainDescription:
      'Diseño y redacción de sitios web pensados para convertir.',
    secondaryDescription: ''
  }
]

const cardsRef = ref(null)
useGridAnimation(cardsRef)
</script>


