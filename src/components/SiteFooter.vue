<template>
  <footer ref="containerRef" class="bg-[#0A0A0A] text-white pt-20 sm:pt-28 pb-0 relative z-10">
    <div class="container-lg mx-auto px-4 sm:px-6">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16 pb-16 border-b border-white/10">
        <!-- Brand Section -->
        <div ref="brandRef" class="opacity-0 col-span-1 md:col-span-1">
          <img
              src="/logotipos_logotipodescriptorv2 negativo.png"
              alt="byloa.agency"
              class="h-20 w-auto mb-7"
            />
          <p class="text-sm text-white/60 leading-relaxed">
            Estrategia, contenido y publicidad digital para marcas que crecen.
          </p>
        </div>

        <!-- Mobile Grid 2 Columns / Desktop 2 Sections -->
        <div class="grid grid-cols-2 md:contents gap-8">
          <!-- Navigation -->
          <div ref="navRef" class="opacity-0">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Navegación
            </h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#about"
                  class="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  class="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  class="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <!-- Social & Contact -->
          <div ref="socialRef" class="opacity-0">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Conecta
            </h3>
            <div class="flex flex-col gap-4 md:flex-row md:gap-6">
              <a
                href="https://www.instagram.com/byloa.agency/"
                class="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 md:gap-0"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-instagram"></i>
                <span class="text-sm md:hidden">Instagram</span>
              </a>
              <a
                href="https://wa.me/5493417797688?text=Hola%20me%20gustaría%20contactarlos"
                class="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 md:gap-0"
                aria-label="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
               <i class="bi bi-whatsapp"></i>
               <span class="text-sm md:hidden">Whatsapp</span>
              </a>
              <a
                href="mailto:loanaaguirre@byloa.agency"
                class="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 md:gap-0"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-envelope"></i>
                <span class="text-sm md:hidden">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/byloa-agency-4810652a9/"
                class="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 md:gap-0"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-linkedin"></i>
                <span class="text-sm md:hidden">Linkedin</span>
              </a>
              <a
                href="https://www.facebook.com/people/Byloa-Agency/61585933823414/"
                class="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 md:gap-0"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-facebook"></i>
                <span class="text-sm md:hidden">Facebook</span>
              </a>
            </div>
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
          <a
            href="https://seiminteractive.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="h-full flex items-center"
          >
            <img
              src="/public/SeimFooter.jpeg"
              alt="Partner Logo"
              class="h-full w-auto object-contain rounded-md"
            />
          </a>
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
