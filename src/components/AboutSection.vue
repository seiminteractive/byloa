<template>
  <section class="about">
    <!-- Video Background -->
    <video class="about-video" autoplay muted loop playsinline>
      <source src="/I_want_an_1080p_202601262119.mp4" type="video/mp4">
    </video>
    <!-- Dark Overlay -->
    <div class="about-overlay"></div>

    <!-- Decorative Elements -->
    <div class="about-deco-left">
      <span class="deco-label" ref="decoLabelRef">QUIÉNES SOMOS</span>
    </div>

    <div class="about-deco-top">
      <span class="deco-number">01</span>
      <span class="deco-divider">/</span>
      <span class="deco-total">03</span>
    </div>
    
    <ClientOnly>
      <div class="space-y-4 animate-text-container services-copy-content" ref="textContainerRef">
        <BlurReveal
          :delay="0.2"
          :duration="0.75"
        >
          <h2 class="animate-text" ref="aboutText1Ref">
            Ordenamos tu comunicación con criterio estratégico.
          </h2>
        </BlurReveal>
        
        <BlurReveal
          :delay="0.5"
          :duration="0.75"
        >
          <h2 class="animate-text" ref="aboutText2Ref">
            Ayudándote a crecer con coherencia en cada canal.
          </h2>
        </BlurReveal>
        
        <BlurReveal
          :delay="0.8"
          :duration="0.75"
        >
          <h2 class="animate-text" ref="aboutText3Ref">
            Nuestro enfoque combina visión a largo plazo con ejecución clara.
          </h2>
        </BlurReveal>
      </div>
    </ClientOnly>
  </section>

  <section class="services" ref="servicesRef">
    <div class="services-header"><img src="/whatido.svg" /></div>
    <div class="services-header"><img src="/whatido.svg" /></div>
    <div class="services-header"><img src="/whatido.svg" /></div>
  </section>

  <section class="services-copy">
    <ClientOnly>
      <div class="services-copy-content">
        <div class="space-y-4">
          <BlurReveal
            :delay="0.2"
            :duration="0.75"
          >
            <h2 class="animate-text" ref="servicesCopyText1Ref">
              Diseñamos sistemas de comunicación claros, funcionales y sostenibles.
            </h2>
          </BlurReveal>
          
          <BlurReveal
            :delay="0.5"
            :duration="0.75"
          >
            <h2 class="animate-text" ref="servicesCopyText2Ref">
              Cada proyecto es pensado con criterio, estrategia y ejecución de calidad.
            </h2>
          </BlurReveal>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollTextAnimation } from '@/composables/useScrollTextAnimation'
import { useScrollServicesAnimation } from '@/composables/useScrollServicesAnimation'
import { useAboutScrollReveal } from '@/composables/useAboutScrollReveal'
import { useDecoLabelAnimation } from '@/composables/useDecoLabelAnimation'
import { BlurReveal } from '@/components/ui/blur-reveal'

const aboutText1Ref = ref(null)
const aboutText2Ref = ref(null)
const aboutText3Ref = ref(null)
const servicesCopyText1Ref = ref(null)
const servicesCopyText2Ref = ref(null)
const servicesRef = ref(null)
const textContainerRef = ref(null)
const decoLabelRef = ref(null)

// Array con referencias para la composable de texto
const textRefs = ref([])

// Inicializa las referencias después de montar
const initializeRefs = () => {
  textRefs.value = []
  if (aboutText1Ref.value) {
    textRefs.value.push(aboutText1Ref.value)
  }
  if (aboutText2Ref.value) {
    textRefs.value.push(aboutText2Ref.value)
  }
  if (aboutText3Ref.value) {
    textRefs.value.push(aboutText3Ref.value)
  }
  if (servicesCopyText1Ref.value) {
    textRefs.value.push(servicesCopyText1Ref.value)
  }
  if (servicesCopyText2Ref.value) {
    textRefs.value.push(servicesCopyText2Ref.value)
  }
}

// Llama las composables
useScrollTextAnimation(textRefs)
useScrollServicesAnimation(servicesRef)
useAboutScrollReveal(textContainerRef)
useDecoLabelAnimation(decoLabelRef)

// Inicializa después de que el componente está listo
setTimeout(initializeRefs, 100)
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Manrope", sans-serif;
  background-color: #1a1a1a;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.15rem;
  line-height: 1.125;
  text-align: center;
}

.about {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.about::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  z-index: -2;
  pointer-events: none;
}

.about-video {
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 4rem);
  object-fit: cover;
  z-index: -2;
  scale: 1.1;
}

.about-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

/* Decorative Elements */
.about-deco-left {
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.deco-label {
  position: relative;
  display: inline-block;
  font-size: 0.6rem;
  letter-spacing: 0.4em;
  color: rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  font-weight: 300;
  transition: color 0.3s ease;
}

.about-deco-top {
  position: absolute;
  top: 2rem;
  right: 3rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.deco-number {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.deco-divider {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
}

.deco-total {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 300;
}

.animate-text-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  padding: 2rem 4rem;
  z-index: 1;
}

/* Decorative line before text block */
.animate-text-container::before {
  content: '';
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 120px;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
}

.services {
  position: relative;
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.services-header {
  position: relative;
  width: 100%;
  padding: 0 2rem;
  background-color: transparent;
  will-change: transform;
}

.services-header img {
  object-fit: contain;
}

.services-header:nth-child(1),
.services-header:nth-child(3) {
  transform: translateX(100%) translateY(0%);
}

.services-header:nth-child(2) {
  transform: translateX(-100%) translateY(0%);
  z-index: 2;
}

.services-copy {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 155svh;
  padding: 2rem 2rem 25svh 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-copy-content {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

.animate-text {
  position: relative;
  width: 100%;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.25);
  --clip-value: 100%;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 300;
  letter-spacing: 0.08em;
  line-height: 1.8;
  text-align: left;
}

.animate-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.9);
  clip-path: inset(0 0 var(--clip-value) 0);
  will-change: clip-path;
  text-align: left;
}

@media (max-width: 1000px) {
  h1 {
    font-size: 2rem;
    letter-spacing: -0.05rem;
  }

  .animate-text {
    width: 100%;
  }
}
</style>
