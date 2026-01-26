<template>
  <section class="about">
    <ClientOnly>
      <div class="space-y-4 animate-text-container services-copy-content">
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
import { BlurReveal } from '@/components/ui/blur-reveal'

const aboutText1Ref = ref(null)
const aboutText2Ref = ref(null)
const aboutText3Ref = ref(null)
const servicesCopyText1Ref = ref(null)
const servicesCopyText2Ref = ref(null)
const servicesRef = ref(null)

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
  height: 100svh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  color: #4f4f4f;
  --clip-value: 100%;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-align: left;
}

.animate-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
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
