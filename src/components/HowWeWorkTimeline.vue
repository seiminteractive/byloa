<template>
  <section class="py-20 sm:py-28 bg-[#1a1a1a] relative z-10">
    <!-- Header with animation -->
    <div 
      class="container-lg mx-auto px-4 sm:px-6 mb-16 md:mb-20 opacity-0"
      data-header-animation
    >
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
        {{ title }}
      </h2>
      <p class="text-lg sm:text-xl text-white/70 max-w-2xl">
        {{ description }}
      </p>
    </div>

    <!-- Timeline -->
    <Timeline :items="steps">
      <template v-for="step in steps" :key="step.id" #[step.id]>
        <div class="pb-10 md:pb-20 lg:pb-40 md:pl-6">
          <h4 class="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
            {{ step.title }}
          </h4>
          <p class="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-md">
            {{ step.description }}
          </p>
        </div>
      </template>
    </Timeline>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Timeline } from '@/components/ui/timeline'

gsap.registerPlugin(ScrollTrigger)

const title = 'Cómo trabajamos'
const description = 'Un proceso claro, ordenado y estratégico en cada proyecto.'

const steps = [
  {
    id: 1,
    label: 'Paso 1',
    title: 'Análisis y diagnóstico',
    description: 'Relevamiento de marca, contexto y objetivos.'
  },
  {
    id: 2,
    label: 'Paso 2',
    title: 'Estrategia',
    description: 'Definición de mensaje, canales y enfoque de comunicación.'
  },
  {
    id: 3,
    label: 'Paso 3',
    title: 'Producción',
    description: 'Desarrollo de contenido alineado a la identidad y estrategia.'
  },
  {
    id: 4,
    label: 'Paso 4',
    title: 'Ejecución',
    description: 'Publicación, gestión y seguimiento.'
  },
  {
    id: 5,
    label: 'Paso 5',
    title: 'Optimización',
    description: 'Análisis de resultados y ajustes continuos.'
  }
]

// Header animation
onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!prefersReducedMotion) {
    const header = document.querySelector('[data-header-animation]')
    
    if (header instanceof HTMLElement) {
      header.style.willChange = 'opacity, transform'
    }

    gsap.set(header, { opacity: 0, y: 20 })

    gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        once: true,
        markers: false
      },
      onComplete: () => {
        if (header instanceof HTMLElement) {
          header.style.willChange = 'auto'
        }
      }
    }).to(
      header,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      },
      0
    )
  }
})
</script>

<style scoped>
/* HowWeWorkTimeline uses Timeline.vue component */
</style>
