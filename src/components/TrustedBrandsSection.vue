<template>
  <section class="py-20 sm:py-28 relative z-10 overflow-hidden bg-black">

    <!-- DEGRADADO LATERAL IZQUIERDO -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-64 
                bg-gradient-to-r from-black to-transparent z-20"></div>

    <!-- DEGRADADO LATERAL DERECHO -->
    <div class="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 lg:w-64 
                bg-gradient-to-l from-black to-transparent z-20"></div>

    <div class="container-lg mx-auto px-4 sm:px-6 relative z-10">

      <!-- Logo central -->
      <div class="mb-16 flex justify-center">
        <img
          src="/logotipos_logotipov1 negativo.png"
          alt="ByLoa Agency"
          class="h-40 px-2"
        />
      </div>

      <!-- Título -->
      <div class="mb-8 text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-Coolvetica text-white">
          MARCAS QUE CONFÍAN Y TRABAJAN CON BYLOA
        </h2>
      </div>

      <!-- Subtítulo -->
      <div class="mb-16 text-center max-w-2xl mx-auto">
        <p class="text-base sm:text-lg text-[#F5F2ED]/90">
          Acompañamos marcas, emprendimientos y proyectos que apuestan a la comunicación estratégica.
        </p>
      </div>
    </div>

    <!-- ===== CARROUSELES ===== -->
    <div
      class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden z-10"
      style="--space: 1rem"
    >

      <!-- MARQUEE 1 -->
      <Marquee :repeat="6" class="[--gap:var(--space)] [--duration:40s]">
        <div
          v-for="brand in brands"
          :key="`row1-${brand.logo}`"
          class="flex items-center shrink-0"
        >
          <div class="w-64 px-6 py-3 rounded-xl bg-white/0 backdrop-blur border border-[#F5F2ED]/0 flex items-center justify-center">
            <img
              :src="brand.logo"
              class="h-8 sm:h-10 w-auto max-w-[140px] object-contain opacity-70 hover:opacity-1 transition"
            />
          </div>
        </div>
      </Marquee>

      <!-- MARQUEE 2 -->
      <div style="margin-top: var(--space)">
        <Marquee :repeat="6" :reverse="true" class="[--gap:var(--space)] [--duration:40s]">
          <div
            v-for="brand in brands"
            :key="`row2-${brand.logo}`"
            class="flex items-center shrink-0"
          >
            <div class="w-64 px-6 py-3 rounded-xl bg-white/0 backdrop-blur border border-[#F5F2ED]/0 flex items-center justify-center">
              <img
                :src="brand.logo"
                class="h-8 sm:h-10 w-auto max-w-[140px] object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          </div>
        </Marquee>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Marquee } from '@/components/ui/marquee'

const brands = [
  { logo: '/logotipos_logotipov1 negativo.png' },
  { logo: '/logotipos_logotipov1 negativo.png' },
  { logo: '/logotipos_logotipov1 negativo.png' },
  { logo: '/logotipos_logotipov1 negativo.png' },
  { logo: '/logotipos_logotipov1 negativo.png' },
  { logo: '/logotipos_logotipov1 negativo.png' },
  { logo: '/logotipos_logotipov1 negativo.png' },
  { logo: '/logotipos_logotipov1 negativo.png' }
]
</script>
