<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
    <div class="container-lg mx-auto px-4 sm:px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div ref="logoRef" class="opacity-0">
          <img
            src="/logotipos_logotipodescriptorv1 positivo.png"
            alt="ByLoa Agency"
            class="h-25 w-auto opacity-70"
          />
        </div>

        <!-- Nav Links - Desktop -->
        <div ref="navRef" class="hidden md:flex items-center gap-8 opacity-0">
          <a
            href="#"
            class="text-xs uppercase tracking-wide text-gray-500 hover:text-black transition-colors"
          >
            Inicio
          </a>
          <a
            href="#"
            class="text-xs uppercase tracking-wide text-gray-500 hover:text-black transition-colors"
          >
            Servicios
          </a>
          <a
            href="#"
            class="text-xs uppercase tracking-wide text-gray-500 hover:text-black transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#"
            class="text-xs uppercase tracking-wide text-gray-500 hover:text-black transition-colors"
          >
            Contacto
          </a>
        </div>

        <!-- CTA Nav -->
        <div ref="ctaNavRef" class="opacity-0">
          <button
            type="button"
            class="px-4 py-1.5 text-xs font-medium text-rose-500 border border-rose-500/40 rounded-full hover:bg-rose-500 hover:text-white transition"
          >
            Contactar
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useNavAnimation } from '../composables/useNavAnimation'

const logoRef = ref(null)
const navRef = ref(null)
const ctaNavRef = ref(null)

const elements = {
  logo: logoRef,
  nav: navRef,
  ctaNav: ctaNavRef
}

useNavAnimation(elements)
</script>

<style scoped>
/* Nav specific styles */
</style>
