<template>
  <section id="home" class="hero-section relative min-h-screen overflow-hidden">
    <!-- Gradient Background -->
    <div class="hero-gradient absolute inset-0 z-0"></div>

    <!-- Content Container -->
    <div class="relative z-10 h-screen flex flex-col">
      
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col items-center justify-center relative px-4 sm:px-8 lg:px-20">
        <!-- Container for centered content -->
        <div class="max-w-5xl w-full text-center">
          <div ref="headlineRef" class="opacity-0">
            <!-- Line 1: Scan & protect with circles - Stack on mobile -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-4">
              <p class="font-coolvetica font-light text-4xl sm:text-5xl lg:text-7xl text-white leading-tight sm:leading-none tracking-tight">
                Ordená y potenciá
              </p>
              <!-- Decorative circles - Responsive size -->
              <svg class="w-24 h-10 sm:w-32 sm:h-12 lg:w-52 lg:h-16 text-white flex-shrink-0" viewBox="0 0 130 32">
                <circle cx="16" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.4"/>
                <circle cx="30" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.5"/>
                <circle cx="44" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.6"/>
                <circle cx="56" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.7"/>
                <circle cx="70" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="0.9"/>
                <circle cx="84" cy="16" r="14" fill="rgba(255,255,255,0.05)" stroke="currentColor" stroke-width="0.3" opacity="1"/>
              </svg>
            </div>

            <!-- Line 2: Buttons + "your payments" - Stack on mobile -->
            <div ref="ctaRef" class="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-4">
              <!-- CTA Button -->
              <button
                type="button"
                class="group w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 px-6 py-3 text-xs sm:text-sm font-light text-white border border-white/40 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                <span>ver propuesta</span>
                <span class="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border border-white/40 rounded-full group-hover:bg-white/10 transition-all">
                  <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <!-- "your payments" text -->
              <p class="font-coolvetica font-light text-3xl sm:text-4xl lg:text-6xl text-white leading-tight sm:leading-none tracking-tight">
                tu comunicación
              </p>
            </div>

            <!-- Line 3 -->
            <p ref="descriptionRef" class="opacity-0 font-coolvetica font-light text-3xl sm:text-4xl lg:text-6xl text-white leading-tight sm:leading-none tracking-tight mb-6">
              con <span class="italic font-cambria">estrategia</span> real.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Section - Responsive Layout -->
      <div class="flex-none w-full px-4 sm:px-8 lg:px-20 pb-6 sm:pb-8">
        <!-- Border line -->
        <div class="border-t border-white/20 mx-auto max-w-8xl mb-6 sm:mb-8"></div>
        
        <!-- Stats Section - Stack on mobile, horizontal on desktop -->
        <div ref="statsRef" class="opacity-0">
          <!-- Left: Description (visible on all sizes) -->
          <div class="mb-6 sm:mb-0 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div class="flex-shrink-0 sm:max-w-xs mb-6 sm:mb-0">
              <h3 class="font-coolvetica font-bold text-xs uppercase tracking-widest text-white mb-2">
                COMUNICACIÓN CLARA
              </h3>
              <p class="font-cambria text-xs text-white/60 leading-relaxed">
                Ordenamos tu comunicación con criterio estratégico, ayudándote a crecer con coherencia en cada canal
              </p>
            </div>

            <!-- Stats - Horizontal scroll on mobile, normal on desktop -->
            <div ref="statsContainerRef" class="flex items-center gap-6 sm:gap-12 overflow-x-auto pb-2 sm:pb-0 sm:flex-1 sm:justify-center snap-x snap-mandatory">
              <!-- Stat 1 -->
              <div class="flex-shrink-0 flex items-center gap-2 snap-center group hover:opacity-80 transition-opacity">
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white group-hover:text-pink-300 transition-colors">100%</p>
                <p class="font-cambria text-xs text-white/60">Proyectos<br/>a Medida</p>
              </div>

              <!-- Stat 2 -->
              <div class="flex-shrink-0 flex items-center gap-2 snap-center group hover:opacity-80 transition-opacity">
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white group-hover:text-pink-300 transition-colors">20+</p>
                <p class="font-cambria text-xs text-white/60">Marcas<br/>Acompañadas</p>
              </div>

              <!-- Stat 3 -->
              <div class="flex-shrink-0 flex items-center gap-2 snap-center group hover:opacity-80 transition-opacity">
                <p class="font-coolvetica font-bold text-2xl sm:text-3xl text-white group-hover:text-pink-300 transition-colors">100%+</p>
                <p class="font-cambria text-xs text-white/60">Clientes<br/>Satisfechos</p>
              </div>
            </div>

            <!-- Light Mode Toggle - Hidden on mobile, visible on desktop -->
            <div class="flex-shrink-0 hidden sm:flex items-center justify-end">
              <label class="flex items-center cursor-pointer group">
                <div class="relative">
                  <input type="checkbox" class="sr-only" />
                  <div class="block w-10 h-6 bg-white/80 group-hover:bg-white rounded-full transition-all"></div>
                  <div class="absolute left-1 top-1 bg-gray-900 w-4 h-4 rounded-full transition"></div>
                </div>
                <div class="ml-3 font-cambria text-xs text-white/70 group-hover:text-white transition-colors">Modo claro</div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Left (Social Links) - Hidden on mobile -->
      <div ref="socialRef" class="opacity-0 absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
        <a href="#" class="text-white/60 hover:text-white transition-all duration-300 hover:scale-110" aria-label="Instagram">
          <i class="pi pi-instagram text-xl"></i>
        </a>
        <a href="#" class="text-white/60 hover:text-white transition-all duration-300 hover:scale-110" aria-label="Twitter">
          <i class="pi pi-twitter text-xl"></i>
        </a>
        <a href="#" class="text-white/60 hover:text-white transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
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
const statsContainerRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline()

  // Staggered animations for a more sophisticated feel
  tl.to(headlineRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    delay: 0.2,
    ease: 'power3.out'
  }, 0)
    .to(ctaRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.6')
    .to(descriptionRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.6')
    .to(statsRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out'
    }, '-=0.6')
    .to(socialRef.value, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')

  // Add subtle hover animation to stats on desktop
  if (window.innerWidth >= 640) {
    const statElements = statsContainerRef.value?.querySelectorAll('.group')
    if (statElements) {
      statElements.forEach((stat) => {
        stat.addEventListener('mouseenter', () => {
          gsap.to(stat, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
        stat.addEventListener('mouseleave', () => {
          gsap.to(stat, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })
    }
  }
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
.hero-section h1,
.hero-section h3 {
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.hero-section p {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Enhanced Button hover effects */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(252, 148, 199, 0.15);
}

button:active {
  transform: translateY(0);
}

/* Smooth scrolling for stats on mobile */
@supports (scroll-behavior: smooth) {
  .overflow-x-auto {
    scroll-behavior: smooth;
  }
}

/* Stats container smooth scrolling */
.snap-x {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.snap-center {
  scroll-snap-align: center;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .hero-section {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  /* Scrollbar styling for stats on mobile */
  .overflow-x-auto::-webkit-scrollbar {
    height: 2px;
  }

  .overflow-x-auto::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  .overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

/* Desktop animations */
@media (min-width: 640px) {
  button {
    position: relative;
    overflow: hidden;
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  button:hover::before {
    left: 100%;
  }
}

/* Improved text rendering */
.hero-section {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
