<template>
  <section ref="containerRef" class="relative w-full min-h-screen bg-black overflow-hidden">
    <div class="w-full h-screen relative flex items-center justify-between px-0">
      <!-- Logo Left -->
      <div
        ref="logoLeftRef"
        class="h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 flex-1"
      >
        <img
          src="/logotipos_logotipodescriptorv1 negativo.png"
          alt="ByLoa Logo Left"
          class="h-32 sm:h-40 md:h-48 w-auto object-contain"
        />
      </div>

      <!-- Logo Right -->
      <div
        ref="logoRightRef"
        class="h-full flex items-center justify-end pr-4 sm:pr-8 md:pr-16 flex-1"
      >
        <img
          src="/public/LogoSeimBeige.png"
          alt="ByLoa Logo Right"
          class="h-32 sm:h-40 md:h-50 w-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref(null)
const logoLeftRef = ref(null)
const logoRightRef = ref(null)

let animationLeft = null
let animationRight = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    gsap.set([logoLeftRef.value, logoRightRef.value], { x: 0 })
    return
  }

  // Logo izquierdo se mueve hacia la derecha
  animationLeft = gsap.fromTo(
    logoLeftRef.value,
    { x: -200 },
    {
      x: 300,
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top center',
        end: 'center center',
        scrub: 1.5,
        markers: false
      }
    }
  )

  // Logo derecho se mueve hacia la izquierda
  animationRight = gsap.fromTo(
    logoRightRef.value,
    { x: 300 },
    {
      x: -250,
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top center',
        end: 'center center',
        scrub: 1.5,
        markers: false
      }
    }
  )
})

onBeforeUnmount(() => {
  if (animationLeft) {
    animationLeft.kill()
  }
  if (animationRight) {
    animationRight.kill()
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
/* Logos meet section specific styles */
img {
  transition: transform 0.3s ease;
}
</style>
