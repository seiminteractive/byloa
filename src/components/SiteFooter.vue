<template>
  <footer ref="containerRef" class="bg-[#0A0A0A] text-white pt-20 sm:pt-28 pb-0 relative z-10">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-white/10">
        <!-- Brand Section -->
        <div ref="brandRef" class="opacity-0">
          <img
              src="/logotipos_logotipodescriptorv1 negativo.png"
              alt="byloa.agency"
              class="h-20 w-auto mb-7"
            />
          <p class="text-sm text-white/60 leading-relaxed">
            Estrategia, contenido y publicidad digital para marcas que crecen.
          </p>
        </div>

        <!-- Navigation -->
        <div ref="navRef" class="opacity-0">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white mb-6">
            Navegación
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Privacidad
              </a>
            </li>
          </ul>
        </div>

        <!-- Social & Contact -->
        <div ref="socialRef" class="opacity-0">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white mb-6">
            Conecta
          </h3>
          <div class="flex gap-6">
            <a
              href="#"
              class="text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="#"
              class="text-white/60 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
             <i class="bi bi-linkedin"></i>
            </a>
            <a
              href="mailto:info@byloa.agency"
              class="text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div ref="bottomRef" class="py-8 opacity-0 flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Copyright -->
        <p class="text-xs text-white/40">
          © 2026 byloa.agency. Todos los derechos reservados.
        </p>

        <!-- Logo (placeholder for asset) -->
        <div class="h-6 flex items-center">
          <img
            v-if="logoSrc"
            :src="logoSrc"
            alt="Partner Logo"
            class="h-full w-auto object-contain opacity-60"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useFooterAnimation } from '../composables/useFooterAnimation'

const containerRef = ref(null)
const brandRef = ref(null)
const navRef = ref(null)
const socialRef = ref(null)
const bottomRef = ref(null)

const logoSrc = ref(null) // Preparado para recibir la imagen luego

const elements = {
  brand: brandRef,
  nav: navRef,
  social: socialRef,
  bottom: bottomRef
}

useFooterAnimation(containerRef, elements)
</script>

<style scoped>
/* Footer specific styles */
</style>
