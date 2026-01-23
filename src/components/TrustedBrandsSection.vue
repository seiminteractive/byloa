<template>
    <section class="py-20 sm:py-28 relative z-10 bg-gradient-to-b from-black via-transparent to-black">
      <div class="container-lg mx-auto px-4 sm:px-6">
  
        <!-- Logo central -->
        <div class="mb-16 flex justify-center">
          <img
            src="/public/logotipos_logotipov1 negativo.png"
            alt="ByLoa Agency"
            class="h-40 px-2"
          />
        </div>
  
        <!-- Título -->
        <div class="mb-8 text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
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
  
      <!-- MARQUEE -->
      <div class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <Swiper
          :slides-per-view="'auto'"
          :space-between="40"
          :loop="false"
          :allow-touch-move="false"
          class="marquee-swiper py-12"
        >
          <SwiperSlide
            v-for="(brand, index) in brandsLoop"
            :key="index"
            style="width: auto"
          >
            <div class="flex items-center justify-center h-24">
              <div class="px-8 py-4 rounded-lg bg-white/5 backdrop-blur border border-white/10">
                <span class="text-white/60 text-sm font-medium">
                  {{ brand.name }}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
</template>
  

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const brands = [
    { name: 'Marca 1' },
    { name: 'Marca 2' },
    { name: 'Marca 3' },
    { name: 'Marca 4' },
    { name: 'Marca 5' },
    { name: 'Marca 6' },
    { name: 'Marca 7' },
    { name: 'Marca 8' }
]

// Duplicamos para loop infinito REAL
const brandsLoop = [...brands, ...brands]
</script>
    

<style scoped>
.marquee-swiper :deep(.swiper-wrapper) {
    display: flex;
    width: max-content;
    animation: marquee 35s linear infinite;
}

@keyframes marquee {
    0% {
    transform: translateX(0);
    }
    100% {
    transform: translateX(-50%);
    }
}
</style>
        