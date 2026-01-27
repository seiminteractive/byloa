<template>
  <section ref="sectionRef" class="why-byloa-section">
    <!-- Gradient Background (identical to Hero) -->
    <div class="hero-gradient"></div>
    
    <!-- Top fade from black -->
    <div class="top-fade"></div>
    
    <!-- Bottom fade to black -->
    <div class="bottom-fade"></div>

    <!-- Content Container -->
    <div class="relative z-0 w-full px-8 sm:px-12 lg:px-20">
      
      <!-- Hero Row: Title Left + Description Right -->
      <div ref="heroRef" class="hero-row">
        <div class="hero-title">
          <h2 class="title-main">
            Diseñado para<br />
            ayudarte a<br />
            <span class="title-italic">comunicar mejor</span>
          </h2>
        </div>
        <div class="hero-description">
          <p class="description-text">
            Nuestro enfoque está pensado para marcas y profesionales que buscan orden, 
            coherencia y resultados reales en su comunicación digital.
          </p>
        </div>
      </div>

      <!-- Features Row -->
      <div ref="featuresRef" class="features-row">
        
        <!-- Feature 1 -->
        <div class="feature-card glass-card">
          <div class="feature-number">01</div>
          <h3 class="feature-title">Enfoque estratégico</h3>
          <p class="feature-description">
            Planificación profunda que entiende tu marca, contexto y objetivos. 
            Construimos sistemas de comunicación sostenibles.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card glass-card">
          <div class="feature-number">02</div>
          <h3 class="feature-title">Procesos claros</h3>
          <p class="feature-description">
            Metodología ordenada y transparente. Cada etapa del proyecto 
            está definida para que sepas qué esperar.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card glass-card">
          <div class="feature-number">03</div>
          <h3 class="feature-title">Comunicación coherente</h3>
          <p class="feature-description">
            Todo tu ecosistema digital alineado. Desde redes sociales hasta 
            tu sitio web, con una voz unificada.
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="feature-card glass-card">
          <div class="feature-number">04</div>
          <h3 class="feature-title">Experiencia real</h3>
          <p class="feature-description">
            Marcas, eventos y servicios premium. Trabajamos con proyectos 
            que apuestan por la calidad.
          </p>
        </div>

      </div>

      <!-- Decorative Elements -->
      <div class="decorative-elements">
        <!-- Left vertical text -->
        <div class="deco-left">
          <span class="deco-text">BYLOA</span>
        </div>
      </div>

      <!-- Bottom glass pill -->
      <div class="deco-pill-container">
        <div class="deco-pill glass-pill">
          <span class="pill-text">Comunicación estratégica</span>
          <div class="pill-dot"></div>
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

const sectionRef = ref(null)
const heroRef = ref(null)
const featuresRef = ref(null)

let ctx = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  ctx = gsap.context(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.value,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heroRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )

    // Features stagger animation
    const features = featuresRef.value?.querySelectorAll('.feature-card')
    if (features) {
      gsap.fromTo(
        features,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.value,
            start: 'top 80%',
            once: true
          }
        }
      )
    }
  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
.why-byloa-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 0;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Gradient Background - IDENTICAL to Hero */
.hero-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 80% 70% at 110% 90%, #F5F2ED 0%, #FC94C7 20%, transparent 55%),
    radial-gradient(ellipse 60% 60% at 100% 65%, #FC94C7 0%, transparent 50%),
    radial-gradient(ellipse 70% 60% at 95% 80%, #F46EBB 0%, transparent 55%),
    radial-gradient(ellipse 90% 80% at 80% 95%, #9a5080 0%, transparent 55%),
    radial-gradient(ellipse 110% 90% at 60% 90%, #5a3060 0%, transparent 60%),
    radial-gradient(ellipse 130% 110% at 45% 100%, #3a2045 0%, transparent 65%),
    linear-gradient(145deg, #0a0a0a 0%, #0a0a0a 42%, #1a1a2e 62%, #2d2045 100%);
}

/* Top fade from black */
.top-fade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, #000000 0%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}

/* Bottom fade to black */
.bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, transparent 0%, #000000 100%);
  z-index: 1;
  pointer-events: none;
}

/* Hero Row */
.hero-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: flex-start;
  margin-bottom: 5rem;
}

/* Title */
.hero-title {
  max-width: 600px;
}

.title-main {
  font-family: 'COOLVETICA', sans-serif;
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 400;
  color: #ffffff;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.title-italic {
  font-style: italic;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
}

/* Description */
.hero-description {
  padding-top: 1rem;
}

.description-text {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  max-width: 380px;
}

/* Features Row */
.features-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* Glass Card */
.glass-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.4s ease;
}

.glass-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  transform: translateY(-4px);
}

/* Feature Card */
.feature-card {
  padding: 1.75rem;
  position: relative;
}

.feature-number {
  font-family: 'Manrope', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
}

.feature-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.feature-description {
  font-family: 'Manrope', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}

/* Decorative Elements */
.decorative-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.deco-left {
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
}

.deco-text {
  font-family: 'Manrope', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
}

/* Glass Pill Container */
.deco-pill-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

/* Glass Pill */
.glass-pill {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
}

.pill-text {
  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.05em;
}

.pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #F46EBB;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-description {
    padding-top: 0;
  }
  
  .description-text {
    max-width: 100%;
  }
  
  .features-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .deco-left {
    display: none;
  }
}

@media (max-width: 640px) {
  .why-byloa-section {
    padding: 4rem 0;
  }
  
  .hero-row {
    margin-bottom: 3rem;
  }
  
  .features-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .title-main {
    font-size: 2.5rem;
  }
  
  .glass-pill {
    margin-top: 2rem;
  }
}
</style>
