<template>
  <section class="py-20 sm:py-28 bg-black">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div class="mb-16 max-w-3xl">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Qué hacemos
        </h2>
        <p class="text-lg sm:text-xl text-white/80">
          Diseñamos sistemas de comunicación claros, funcionales y sostenibles.
        </p>
      </div>

      <!-- Services Grid -->
      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :title="service.title"
          :mainDescription="service.mainDescription"
          :secondaryDescription="service.secondaryDescription"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from './ServiceCard.vue'
import { useServicesScrollAnimation } from '../composables/useServicesScrollAnimation'

const services = [
  {
    id: 1,
    title: 'Gestión de redes sociales',
    mainDescription: 'Estrategia de contenidos, planificación mensual, creación de piezas y community management.',
    secondaryDescription: 'Construimos presencia, posicionamiento y coherencia de marca.'
  },
  {
    id: 2,
    title: 'Creación de contenido',
    mainDescription: 'Producción de contenido orgánico, reels y piezas visuales con dirección creativa y estética cuidada.',
    secondaryDescription: 'Contenido pensado para comunicar, conectar y convertir.'
  },
  {
    id: 3,
    title: 'Publicidad digital (Google Ads & Meta Ads)',
    mainDescription: 'Planificación y gestión de campañas publicitarias en Google Ads y Meta Ads, alineadas a objetivos reales.',
    secondaryDescription: 'Segmentación, análisis de métricas y optimización continua del presupuesto.'
  },
  {
    id: 4,
    title: 'Branding & comunicación',
    mainDescription: 'Definición y orden del mensaje de marca, identidad visual y lineamientos de comunicación.',
    secondaryDescription: 'Marcas que se entienden, se diferencian y se ven profesionales.'
  },
  {
    id: 5,
    title: 'Web & landings',
    mainDescription: 'Diseño y redacción de sitios web y landings pensadas para convertir visitas en consultas reales.',
    secondaryDescription: ''
  }
]

const cardsRef = ref(null)

useServicesScrollAnimation(cardsRef)
</script>

<style scoped>
/* Services section specific styles */
</style>
