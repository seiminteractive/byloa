<template>
  <section ref="containerRef" class="relative w-full bg-gradient-to-b from-black  to-black overflow-hidden">
    <!-- Background Gradients - Solo para la sección de logos -->
    <div class="absolute inset-0 logos-meet-bg pointer-events-none" style="height: 100vh; mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);"></div>

    <!-- Logos Meeting Part -->
    <div class="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 z-0">
      <div class="relative flex flex-col md:flex-row items-center justify-center gap-12">
        <!-- Logo Left -->
        <div ref="logoLeftRef">
          <img
            src="/logotipos_logotipodescriptorv1 negativo.png"
            alt="ByLoa Logo Left"
            class="h-32 sm:h-40 md:h-48 w-auto object-contain"
          />
        </div>

        <!-- Logo Right -->
        <div ref="logoRightRef">
          <img
            src="/public/LogoSeimBeige.png"
            alt="Seim Logo Right"
            class="h-32 sm:h-40 md:h-48 w-auto object-contain"
          />
        </div>
      </div>
    </div>

    <!-- Gradient Transition to Black -->
    <div class="relative w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-2"></div>

    <!-- Integration Description - Pure Black Background -->
    <div class="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-black z-0">
      <div class="max-w-5xl mx-auto">
        <!-- Header Label -->
        <div class="flex items-center gap-3 mb-12 md:mb-16 opacity-0" ref="labelRef">
          <div class="w-8 h-px bg-white/20"></div>
          <span class="text-xs uppercase tracking-widest text-white/40 font-light">Integración estratégica</span>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start opacity-0" ref="contentRef">
          <!-- Left: Main Text -->
          <div>
            <p class="text-sm md:text-base text-white/70 font-light leading-relaxed mb-6">
              Para proyectos que requieren un desarrollo técnico más profundo, 
              <span class="text-white font-medium">byloa.agency</span> trabaja de forma integrada con 
              <a target="_blank" href="https://seiminteractive.io/"><span class="text-white font-medium">SEIM Interactive</span></a>, 
              el área especializada en desarrollo web, software y soluciones digitales.
            </p>
            <p class="text-sm md:text-base text-white/70 font-light leading-relaxed">
              Esta integración permite ofrecer proyectos completos, donde la estrategia, la comunicación, el diseño y la tecnología trabajan alineados desde el inicio.
            </p>
          </div>

          <!-- Right: Capabilities Grid -->
          <div class="space-y-4">
            <div class="flex gap-3 opacity-0" ref="capability1Ref">
              <div class="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></div>
              <p class="text-sm text-white/60 font-light">Estrategia y comunicación visual</p>
            </div>
            <div class="flex gap-3 opacity-0" ref="capability2Ref">
              <div class="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></div>
              <p class="text-sm text-white/60 font-light">Desarrollo web y aplicaciones</p>
            </div>
            <div class="flex gap-3 opacity-0" ref="capability3Ref">
              <div class="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></div>
              <p class="text-sm text-white/60 font-light">Soluciones digitales personalizadas</p>
            </div>
            <div class="flex gap-3 opacity-0" ref="capability4Ref">
              <div class="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></div>
              <p class="text-sm text-white/60 font-light">Ejecución alineada y coherente</p>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="w-full h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mt-12 md:mt-16 opacity-0" ref="dividerRef"></div>
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
const labelRef = ref(null)
const contentRef = ref(null)
const capability1Ref = ref(null)
const capability2Ref = ref(null)
const capability3Ref = ref(null)
const capability4Ref = ref(null)
const dividerRef = ref(null)

let ctx

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  ctx = gsap.context(() => {
    // Logo animations
    gsap.fromTo(
      logoLeftRef.value,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power2.out',
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top center',
          end: 'center center',
          scrub: 1.5
        }
      }
    )

    gsap.fromTo(
      logoRightRef.value,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power2.out',
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top center',
          end: 'center center',
          scrub: 1.5
        }
      }
    )

    // Description section animations
    gsap.fromTo(
      labelRef.value,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: labelRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )

    gsap.fromTo(
      contentRef.value,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: contentRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )

    // Capabilities stagger
    gsap.fromTo(
      [capability1Ref.value, capability2Ref.value, capability3Ref.value, capability4Ref.value],
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: contentRef.value,
          start: 'top 80%',
          once: true
        }
      }
    )

    gsap.fromTo(
      dividerRef.value,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6,
        scrollTrigger: {
          trigger: dividerRef.value,
          start: 'top 85%',
          once: true
        }
      }
    )
  }, containerRef)
})

onBeforeUnmount(() => {
  ctx && ctx.revert()
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
img {
  display: block;
  will-change: transform, opacity;
}

.logos-meet-bg {
  background: 
    radial-gradient(ellipse 90% 50% at 20% 50%, rgba(252, 148, 199, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 85% 70% at 80% 40%, rgba(244, 110, 187, 0.12) 0%, transparent 55%),
    radial-gradient(ellipse 70% 60% at 50% 20%, rgba(245, 242, 237, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 10% 90%, rgba(252, 148, 199, 0.1) 0%, transparent 60%),
    linear-gradient(180deg, #000000 0%, #1A1A1A 40%, #1A1A1A 60%, #000000 100%);
}
</style>
