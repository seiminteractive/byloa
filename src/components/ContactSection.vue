<template>
  <section class="relative w-full min-h-screen bg-gradient-to-b from-black via-transparent to-black overflow-hidden flex items-center justify-center py-12 sm:py-20">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-white/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl -ml-40 -mb-40"></div>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 container-lg mx-auto px-4 sm:px-6 w-full max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">

        <!-- LEFT COLUMN -->
        <div class="lg:col-span-3 flex flex-col">
          <!-- Top Card -->
          <div
            ref="cardLeftTopRef"
            class="rounded-[28px] backdrop-blur-xl bg-white/8 border border-white/15 p-10 sm:p-12 flex flex-col justify-center min-h-[280px] shadow-xl shadow-black/20 overflow-hidden relative opacity-0"
          >
            <div class="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-40"></div>

            <div class="relative z-10">
              <h2 class="text-3xl sm:text-4xl font-light text-white mb-4 leading-tight tracking-tight">
                ¿Tu marca necesita
                <span class="font-semibold">orden y estrategia?</span>
              </h2>
              <p class="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Comunicación profesional que ordena, potencia y crece.
              </p>
            </div>
          </div>

          <!-- Bottom Card: Contact -->
          <div
            ref="cardLeftBottomRef"
            class="rounded-[28px] bg-black/60 backdrop-blur-lg border border-white/10 p-10 sm:p-12 mt-8 flex flex-col min-h-[320px] shadow-xl shadow-black/30 overflow-hidden relative opacity-0"
          >
            <div class="absolute inset-0 rounded-[28px] border border-white/5"></div>

            <div class="relative z-10 flex flex-col h-full">
              <!-- Title -->
              <h3 class="text-sm font-semibold text-white uppercase tracking-widest mb-8">
                Contacto
              </h3>

              <!-- CONTACT LINKS -->
              <div class="mb-auto space-y-8">
                <!-- WhatsApp + Instagram -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p class="text-xs text-white/50 font-medium uppercase tracking-wider mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/5493417797688"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-white text-sm hover:text-white/80 transition duration-300 font-light"
                    >
                      +54 9 341 779 7688
                    </a>
                  </div>

                  <div>
                  <p class="text-xs text-white/50 font-medium uppercase tracking-wider mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/byloa.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white text-sm hover:text-white/80 transition duration-300 font-light"
                  >
                    @byloa.agency
                  </a>
                </div>
                </div>

                <!-- Email -->
                

                <div>
                    <p class="text-xs text-white/50 font-medium uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:loanaaguirre@byloa.agency"
                      class="text-white text-sm hover:text-white/80 transition duration-300 font-light"
                    >
                      loanaaguirre@byloa.agency
                    </a>
                  </div>
              </div>

              <!-- CTA -->
              <div class="pt-8 mt-8 border-t border-white/10">
                <a
                  href="#solicitar"
                  class="inline-flex items-center gap-3 px-8 py-3 bg-black/80 hover:bg-black text-white text-sm font-medium rounded-full transition duration-300 group"
                >
                  <span>Solicitar</span>
                  <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT CARD: Split Glass + Image -->
        <div class="lg:col-span-2">
          <div
            ref="cardRightRef"
            class="card-split-glass rounded-[28px] overflow-hidden relative opacity-0 min-h-full"
            style="background-image: url('https://img.freepik.com/fotos-premium/papel-pared-movil-patron-color-rosa-pastel-gradiente_53876-1085414.jpg');"
          >
            <!-- Left Half: Glassmorphism -->
            <div class="absolute inset-0 left-half-glass rounded-l-[28px]"></div>

            <!-- Right Half: Normal (transparent or white) -->
            <div class="absolute inset-0 right-half-normal rounded-r-[28px]"></div>

            <!-- Content Wrapper -->
            <div class="relative z-10 flex flex-col justify-between h-full min-h-full p-12 sm:p-16">
              <!-- Top Section -->
              <div>
                <p class="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-6">
                  Propuesta
                </p>

                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  Solución
                  <span class="font-semibold">personalizada</span><br />
                  <span class="text-gray-700">para tu marca</span>
                </h2>

                <p class="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-md">
                  Estrategia, contenido y publicidad digital diseñados según tus objetivos reales.
                </p>
              </div>

              <!-- Bottom Section -->
              <div class="pt-12 border-t border-gray-300 space-y-4">
                <p class="text-sm text-gray-600 font-light">
                  Responderemos en menos de 24 horas
                </p>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-sm text-gray-500 font-light">
                    Disponible para nuevos proyectos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import { useContactCardsAnimation } from '../composables/useContactCardsAnimation'

// Refs for animation
const cardLeftTopRef = ref(null)
const cardLeftBottomRef = ref(null)
const cardRightRef = ref(null)

// Initialize animations
useContactCardsAnimation({
  leftTop: cardLeftTopRef,
  leftBottom: cardLeftBottomRef,
  right: cardRightRef
})
</script>

<style scoped>
/* Contact section styles - Split Glass Card */

.card-split-glass {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
}

/* Left Half: Glassmorphism */
.left-half-glass {
  width: 50%;
  left: 0;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(16px);
  background-color: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: none;
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  position: absolute;
  height: 100%;
  top: 0;
}

/* Right Half: Normal / Transparent */
.right-half-normal {
  width: 50%;
  right: 0;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-left: none;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  position: absolute;
  height: 100%;
  top: 0;
}

/* Inner light highlight for glass (optional) */
.left-half-glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2));
  border-top-left-radius: 28px;
}

/* Responsive: Stack on mobile */
@media (max-width: 768px) {
  .left-half-glass {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    border-right: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom-left-radius: 0;
    height: 50%;
  }

  .right-half-normal {
    width: 100%;
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.15);
    border-top-right-radius: 0;
    top: 50%;
    height: 50%;
  }

  .left-half-glass::before {
    border-top-left-radius: 28px;
  }
}
</style>
