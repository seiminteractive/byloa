<template>
  <section ref="containerRef" class="h-screen bg-gradient-to-b from-black to-[#1a1a1a] relative overflow-hidden">
    <div class="w-screen h-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-linear-to-b flex items-center justify-center">
      <!-- Logos Container -->
      <div class="absolute inset-0 w-full h-full flex items-center justify-between px-0">
        <!-- Logo Left -->
        <div
          ref="logoLeftRef"
          class="absolute left-0 h-full flex items-center justify-start pl-0"
          style="width: 50vw"
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
          class="absolute right-0 h-full flex items-center justify-end pr-0"
          style="width: 50vw"
        >
          <img
            src="/public/LogoSeimBeige.png"
            alt="ByLoa Logo Right"
            class="h-32 sm:h-40 md:h-50 w-auto object-contain"
          />
        </div>
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
