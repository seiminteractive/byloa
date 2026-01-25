<template>
  <section class="py-20 sm:py-28 bg-black relative z-10">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <!-- MAIN CONTACT CARD -->
      <div
        ref="contactCard"
        class="
          relative overflow-hidden
          rounded-[48px]
          backdrop-blur-lg
          bg-linear-to-br from-white/9 via-white/4 to-transparent
          border border-white/10
          p-8 sm:p-12 lg:p-16
          shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_24px_48px_rgba(0,0,0,0.65)]
        "
      >
        <!-- DECORATIVE ACCENT BARS -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#F45EBB]/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#FC94C7]/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <!-- CONTENT (relative z-10) -->
        <div class="relative z-10">
          <!-- HEADING -->
          <div class="mb-8 sm:mb-12">
            <h2
              ref="titleRef"
              class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4"
            >
              Contacto
            </h2>
            <p
              ref="subtitleRef"
              class="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              ¿Tu marca necesita orden, estrategia y una comunicación profesional?
            </p>
          </div>

          <!-- CONTACT METHODS GRID -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <!-- WhatsApp -->
            <div
              ref="contactItemsRef"
              class="
                group overflow-hidden rounded-[24px]
                backdrop-blur-md
                bg-linear-to-br from-white/6 to-transparent
                border border-white/10
                hover:border-[#F45EBB]/30
                p-6 sm:p-8
                transition-all duration-300
              "
            >
              <div class="flex items-start gap-4">
                <span class="text-3xl">📲</span>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/5493417797688"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white/70 hover:text-[#F45EBB] transition-colors duration-300 break-all"
                  >
                    +54 9 341 779 7688
                  </a>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div
              ref="contactItemsRef"
              class="
                group overflow-hidden rounded-[24px]
                backdrop-blur-md
                bg-linear-to-br from-white/6 to-transparent
                border border-white/10
                hover:border-[#FC94C7]/30
                p-6 sm:p-8
                transition-all duration-300
              "
            >
              <div class="flex items-start gap-4">
                <span class="text-3xl">📧</span>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Email</h3>
                  <a
                    href="mailto:loanaaguirre@byloa.agency"
                    class="text-white/70 hover:text-[#FC94C7] transition-colors duration-300 break-all"
                  >
                    loanaaguirre@byloa.agency
                  </a>
                </div>
              </div>
            </div>

            <!-- Instagram -->
            <div
              ref="contactItemsRef"
              class="
                group overflow-hidden rounded-[24px]
                backdrop-blur-md
                bg-linear-to-br from-white/6 to-transparent
                border border-white/10
                hover:border-[#F45EBB]/30
                p-6 sm:p-8
                transition-all duration-300
              "
            >
              <div class="flex items-start gap-4">
                <span class="text-3xl">📸</span>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/byloa.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white/70 hover:text-[#F45EBB] transition-colors duration-300"
                  >
                    @byloa.agency
                  </a>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <div
              ref="contactItemsRef"
              class="
                group overflow-hidden rounded-[24px]
                backdrop-blur-md
                bg-linear-to-br from-[#F45EBB]/20 via-[#FC94C7]/10 to-transparent
                border border-[#F45EBB]/30
                hover:border-[#F45EBB]/50
                p-6 sm:p-8
                transition-all duration-300
              "
            >
              <div class="flex items-start gap-4">
                <span class="text-3xl">👉</span>
                <div class="w-full">
                  <h3 class="text-lg font-semibold text-white mb-2">Propuesta Personalizada</h3>
                  <a
                    href="#solicitar"
                    class="
                      inline-block mt-2 px-4 py-2 rounded-lg
                      bg-[#F45EBB] hover:bg-[#FC94C7]
                      text-white text-sm font-semibold
                      transition-all duration-300
                      hover:shadow-[0_0_20px_rgba(244,94,187,0.3)]
                    "
                  >
                    Solicitar propuesta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- CLOSING MESSAGE -->
          <div class="text-center pt-8 border-t border-white/10">
            <p class="text-white/60 text-sm sm:text-base">
              Responderemos en menos de 24 horas.
              <span class="block mt-2 text-white/40">Porque tu marca merece atención profesional.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useContactAnimation } from '../composables/useContactAnimation'

const contactCard = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const contactItemsRef = ref([])

useContactAnimation(contactCard)
</script>

<style scoped>
/* Contact section specific styles */
</style>
