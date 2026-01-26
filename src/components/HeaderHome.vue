<template>
  <section class="hero-section relative min-h-screen overflow-hidden">
    <!-- Gradient Background -->
    <div class="hero-gradient absolute inset-0 z-0"></div>

    <!-- Content Container -->
    <div class="relative z-10 h-screen flex flex-col">
      <!-- Top Navigation Bar -->
      <nav class="flex items-center justify-between px-8 sm:px-12 lg:px-20 py-6">
        <!-- Left: Logo -->
        <div class="text-2xl font-coolvetica font-bold text-white">
          <img src="/logotipos_logotipodescriptorv1 negativo.png" alt="ByLoa Agency" class="h-10 w-auto opacity-90">
        </div>

        <!-- Center: Navigation Links -->
        <div class="hidden lg:flex items-center gap-25 text-sm">
          <span class="flex items-center gap-2">
            <span class="text-white">•</span>
            <a href="#" class="text-white hover:text-gray-300 transition">Home</a>
          </span>
          <a href="#" class="text-gray-400 hover:text-gray-300 transition">About</a>
          <a href="#" class="text-gray-400 hover:text-gray-300 transition">Work</a>
          <a href="#" class="text-gray-400 hover:text-gray-300 transition">Services</a>
        </div>

        <!-- Right Side Navigation -->
        <div class="hidden lg:flex items-center gap-8 text-sm">
          <button class="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition">
            Contactar
          </button>
        </div>
      </nav>

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col items-center justify-center relative px-8 sm:px-12 lg:px-20">
        <!-- Container for centered content -->
        <div class="max-w-5xl w-full text-center">
          <div ref="headlineRef" class="opacity-0">
            <!-- Line 1: Scan & protect with circles -->
            <div class="flex items-end justify-center gap-4 mb-4">
              <p class="font-coolvetica font-light text-5xl sm:text-6xl lg:text-7xl text-white leading-none tracking-tight">
                Ordená y potenciá
              </p>
              <!-- Decorative circles - Large, overlapping, with subtle fill -->
              <svg class="w-32 h-12 sm:w-40 sm:h-14 lg:w-52 lg:h-16 text-white" viewBox="0 0 130 32">
                <circle cx="16" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.4"/>
                <circle cx="30" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.5"/>
                <circle cx="44" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.6"/>
                <circle cx="56" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.7"/>
                <circle cx="70" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.9"/>
                <circle cx="84" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="1"/>
              </svg>
            </div>

            <!-- Line 2: Buttons + "your payments" on same line -->
            <div ref="ctaRef" class="opacity-0 flex items-end justify-center gap-4 mb-4">
              <!-- CTA Button - Toggle style pill -->
              <button
                type="button"
                class="flex items-center gap-4 pl-6 text-sm font-light text-white border border-white/40 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <span>ver propuesta</span>
                <span class="flex items-center justify-center w-11 h-11 border border-white/40 rounded-full">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <!-- "your payments" text -->
              <p class="font-coolvetica font-light text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight">
                tu comunicación
              </p>
            </div>

            <!-- Line 3: with sift service -->
            <p ref="descriptionRef" class="opacity-0 font-coolvetica font-light text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight">
              con <span class="italic font-cambria">estrategia</span> real.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Section Container - All in one row -->
      <div class="flex-none w-full px-8 sm:px-12 lg:px-20">
        <!-- Border line - centered, not full width -->
        <div class="border-t border-white/20 mx-auto max-w-8xl"></div>
        <div class="pt-8 pb-8">
          <div ref="statsRef" class="opacity-0 flex items-center justify-between gap-12">
            <!-- Left: Safe Security -->
            <div class="flex-shrink-0 max-w-xs">
              <h3 class="font-coolvetica font-bold text-xs uppercase tracking-widest text-white mb-2">
                COMUNICACIÓN CLARA
              </h3>
              <p class="font-cambria text-xs text-white/60 leading-relaxed">
                Ordenamos tu comunicación con criterio estratégico, ayudándote a crecer con coherencia en cada canal
              </p>
            </div>

            <!-- Center: Stats -->
            <div class="flex items-center justify-center gap-20 flex-1">
              <!-- Stat 1 -->
              <div class="flex-shrink-0 flex items-center gap-2">
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white">100%</p>
                <p class="font-cambria text-xs text-white/60">Proyectos<br/>a Medida</p>
              </div>

              <!-- Stat 2 -->
              <div class="flex-shrink-0 flex items-center gap-2">
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white">20+</p>
                <p class="font-cambria text-xs text-white/60">Marcas<br/>Acompañadas</p>
              </div>

              <!-- Stat 3 -->
              <div class="flex-shrink-0 flex items-center gap-2">
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white">100%+</p>
                <p class="font-cambria text-xs text-white/60">Clientes<br/>Satisfechos</p>
              </div>
            </div>

            <!-- Right: Light Mode Toggle -->
            <div class="flex-shrink-0 flex items-center justify-end">
              <label class="flex items-center cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only" />
                  <div class="block w-10 h-6 bg-white rounded-full"></div>
                  <div class="absolute left-1 top-1 bg-gray-900 w-4 h-4 rounded-full transition"></div>
                </div>
                <div class="ml-3 font-cambria text-xs text-white">Modo claro</div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Left (Social Links) -->
      <div ref="socialRef" class="opacity-0 absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
        <a href="#" class="text-white hover:text-gray-300 transition" aria-label="Instagram">
          <i class="pi pi-instagram text-xl"></i>
        </a>
        <a href="#" class="text-white hover:text-gray-300 transition" aria-label="Twitter">
          <i class="pi pi-twitter text-xl"></i>
        </a>
        <a href="#" class="text-white hover:text-gray-300 transition" aria-label="LinkedIn">
          <i class="pi pi-linkedin text-xl"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const headlineRef = ref(null)
const descriptionRef = ref(null)
const ctaRef = ref(null)
const statsRef = ref(null)
const socialRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  tl.to(headlineRef.value, {
    opacity: 1,
    duration: 0.8,
    delay: 0.2
  })
    .to(ctaRef.value, {
      opacity: 1,
      duration: 0.8
    }, '-=0.4')
    .to(descriptionRef.value, {
      opacity: 1,
      duration: 0.8
    }, '-=0.4')
    .to(statsRef.value, {
      opacity: 1,
      duration: 0.8
    }, '-=0.4')
    .to(socialRef.value, {
      opacity: 1,
      duration: 0.8
    }, '-=0.4')
})
</script>

<style scoped>
.hero-section {
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

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

/* Ensure text remains visible */
.hero-section h1 {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.hero-section p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Button hover effects */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-2px);
}

/* Stats responsive */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
