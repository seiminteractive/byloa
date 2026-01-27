<template>
  <section ref="sectionRef" class="how-we-work-section relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 how-we-work-bg"></div>
    
    <!-- Content Container -->
    <div class="relative z-0 w-full px-8 sm:px-12 lg:px-20">
      
      <!-- Header -->
      <div ref="headerRef" class="header-content mb-20 md:mb-28">
        <div class="flex items-center gap-3">
          <div class="w-8 h-px bg-white/20"></div>
          <span class="section-label">PROCESO</span>
        </div>
        <h2 class="section-title text-start ml-0">Cómo trabajamos</h2>
      </div>

      <!-- Timeline Container -->
      <div class="timeline-container">
        
        <!-- Timeline Line -->
        <div class="timeline-line">
          <div ref="lineProgressRef" class="timeline-line-progress"></div>
        </div>

        <!-- Timeline Items -->
        <div class="timeline-items">
          <div 
            v-for="(step, index) in steps" 
            :key="step.id"
            ref="itemRefs"
            class="timeline-item"
            :class="{ 'item-top': index % 2 === 0, 'item-bottom': index % 2 !== 0 }"
          >
            <!-- Dot -->
            <div class="timeline-dot">
              <div class="dot-inner"></div>
            </div>
            
            <!-- Vertical Line -->
            <div class="vertical-line"></div>
            
            <!-- Content Card -->
            <div class="timeline-card">
              <!-- Date/Step Label -->
              <span class="step-label">{{ step.label }}</span>
              
              <!-- Title -->
              <h4 class="step-title">{{ step.title }}</h4>
              
              <!-- Description -->
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    id: 1,
    label: 'Paso 1',
    title: 'Análisis y diagnóstico',
    description: 'Relevamiento de marca, contexto y objetivos para entender tu negocio.'
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
    description: 'Publicación, gestión y seguimiento continuo.'
  },
  {
    id: 5,
    label: 'Paso 5',
    title: 'Optimización',
    description: 'Análisis de resultados y ajustes continuos para maximizar impacto.'
  }
]

// Refs
const sectionRef = ref(null)
const headerRef = ref(null)
const lineProgressRef = ref(null)
const itemRefs = ref([])

let ctx = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  ctx = gsap.context(() => {
    // Header animation
    gsap.fromTo(
      headerRef.value,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )

    // Line progress animation
    gsap.fromTo(
      lineProgressRef.value,
      { width: '0%' },
      {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 70%',
          end: 'bottom 50%',
          scrub: 1
        }
      }
    )

    // Items stagger animation
    itemRefs.value.forEach((item, index) => {
      const isTop = index % 2 === 0
      
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          y: isTop ? -30 : 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true
          }
        }
      )
    })

  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
.how-we-work-section {
  min-height: 100vh;
  padding: 8rem 0;
  display: flex;
  align-items: center;
}

/* Background */
.how-we-work-bg {
  background: 
    radial-gradient(ellipse 80% 60% at 85% 30%, rgba(245, 168, 85, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 60% 50% at 90% 50%, rgba(230, 130, 60, 0.1) 0%, transparent 45%),
    radial-gradient(ellipse 70% 70% at 10% 80%, rgba(252, 148, 199, 0.08) 0%, transparent 50%),
    linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
}

/* Header */
.header-content {
  text-align: center;
}

.section-label {
  display: block;
  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

.section-title {
  font-family: 'COOLVETICA', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 400;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: 1rem;
}

/* Timeline Container */
.timeline-container {
  position: relative;
  padding: 10rem 0;
}

/* Timeline Line */
.timeline-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-50%);
}

.timeline-line-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: rgba(255, 255, 255, 0.6);
}

/* Timeline Items */
.timeline-items {
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 2rem;
}

.timeline-item {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
}

/* Dot */
.timeline-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot-inner {
  width: 7px;
  height: 7px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
}

/* Vertical Line */
.vertical-line {
  position: absolute;
  left: 50%;
  width: 1px;
  height: 80px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)
  );
  transform: translateX(-50%);
}

.item-top .vertical-line {
  bottom: 50%;
  margin-bottom: 8px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)
  );
}

.item-bottom .vertical-line {
  top: 50%;
  margin-top: 8px;
}

/* Content Card */
.timeline-card {
  position: absolute;
  width: max-content;
  max-width: 280px;
  text-align: left;
  left: 50%;
  transform: translateX(-50%);
}

.item-top .timeline-card {
  bottom: calc(50% + 100px);
}

.item-bottom .timeline-card {
  top: calc(50% + 100px);
}

/* Step Label */
.step-label {
  display: block;
  font-family: 'Manrope', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.5rem;
}

/* Step Title */
.step-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

/* Step Description */
.step-description {
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .timeline-container {
    padding: 8rem 0;
  }
  
  .timeline-card {
    max-width: 200px;
  }
  
  .vertical-line {
    height: 60px;
  }
  
  .item-top .timeline-card {
    bottom: calc(50% + 80px);
  }
  
  .item-bottom .timeline-card {
    top: calc(50% + 80px);
  }
  
  .timeline-item {
    min-width: 140px;
  }
}

@media (max-width: 768px) {
  .how-we-work-section {
    padding: 4rem 0;
  }
  
  .timeline-container {
    padding: 2rem 0 0 0;
  }
  
  /* Switch to vertical layout on mobile */
  .timeline-line {
    top: 0;
    bottom: 0;
    left: 20px;
    right: auto;
    width: 1px;
    height: auto;
    transform: none;
  }
  
  .timeline-line-progress {
    width: 100%;
    height: 0%;
  }
  
  .timeline-items {
    flex-direction: column;
    gap: 3rem;
    padding-left: 60px;
  }
  
  .timeline-item {
    align-items: flex-start;
  }
  
  .timeline-dot {
    left: -40px;
    top: 0;
    transform: translate(-50%, 0);
  }
  
  .vertical-line {
    display: none;
  }
  
  .timeline-card {
    position: relative;
    left: 0;
    top: 0;
    bottom: auto;
    transform: none;
    max-width: 100%;
  }
  
  .item-top .timeline-card,
  .item-bottom .timeline-card {
    position: relative;
    left: 0;
    top: 0;
    bottom: auto;
    transform: none;
  }
}
</style>
