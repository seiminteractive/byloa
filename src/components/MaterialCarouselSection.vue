<template>
  <section class="py-20 sm:py-28 bg-black">
    <!-- Carousel Full Width Wrapper -->
    <div ref="containerRef" class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      <div class="w-full">
        <!-- Header (inside normal container) -->
        <div class="container-lg mx-auto px-4 sm:px-6 mb-12">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F2F0E3] mb-4">
            Proyectos
          </h2>
          <p class="text-lg sm:text-xl text-[#F2F0E3]">
            Trabajos recientes que demuestran nuestra estrategia y ejecución.
          </p>
        </div>

        <!-- Carousel Full Width -->
        <Swiper
  ref="swiperInstance"
  :modules="[Pagination]"
  :slides-per-view="3"
  :space-between="24"
  :loop="true"
  :centered-slides="true"
  :speed="600"
  :grab-cursor="true"
  :breakpoints="{
    320: { slidesPerView: 1.2, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 }
  }"
  :pagination="{
    clickable: true,
    bulletClass: 'swiper-pagination-bullet-custom',
    bulletActiveClass: 'swiper-pagination-bullet-active-custom'
  }"
  @swiper="onSwiperInit"
  class="w-full"
>
          <SwiperSlide v-for="project in projects" :key="project.id">
            <CarouselSlide
              :image="project.image"
              :title="project.title"
              :description="project.description"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <!-- Pagination (outside full width) -->
    <div class="container-lg mx-auto px-4 sm:px-6 mt-12 flex justify-center">
      <div class="swiper-pagination-custom" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import CarouselSlide from './CarouselSlide.vue'
import { useCarouselAnimations } from '../composables/useCarouselAnimations'

const containerRef = ref(null)
const swiperInstance = ref(null)
const swiperRef = ref(null)

const projects = [
  {
    id: 1,
    image: '/MARCA_Mesa de trabajo 1 copia 9.jpg',
    title: 'Proyecto 1',
    description: 'Estrategia digital integral'
  },
  {
    id: 2,
    image: '/MARCA_Mesa de trabajo 1 copia 10.jpg',
    title: 'Proyecto 2',
    description: 'Identidad visual y branding'
  },
  {
    id: 3,
    image: '/MARCA_Mesa de trabajo 1 copia 12.jpg',
    title: 'Proyecto 3',
    description: 'Campaña de redes sociales'
  },
  {
    id: 4,
    image: '/MARCA_Mesa de trabajo 1 copia 13.jpg',
    title: 'Proyecto 4',
    description: 'Landing page de conversión'
  },
  {
    id: 5,
    image: '/MARCA_Mesa de trabajo 1 copia 9.jpg',
    title: 'Proyecto 5',
    description: 'Estrategia digital integral'
  },
  {
    id: 6,
    image: '/MARCA_Mesa de trabajo 1 copia 10.jpg',
    title: 'Proyecto 6',
    description: 'Identidad visual y branding'
  }
]

const onSwiperInit = (swiper) => {
  swiperRef.value = { swiper }

  // MUY IMPORTANTE: esperar a que Swiper termine de clonar
  requestAnimationFrame(() => {
    swiper.slideToLoop(0, 0, false)
  })
}

useCarouselAnimations(containerRef, swiperRef)
</script>

<style scoped>
/* Full width carousel container */
:deep(.swiper) {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: visible;
}

:deep(.swiper-wrapper) {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.swiper-slide) {
  opacity: 0.6;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.swiper-slide-active) {
  opacity: 1;
}

:deep(.swiper-slide-prev),
:deep(.swiper-slide-next) {
  opacity: 0.8;
}

/* Custom pagination */
:deep(.swiper-pagination-custom) {
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 20px;
}

:deep(.swiper-pagination-bullet-custom) {
  width: 8px;
  height: 8px;
  background-color: #1a1a1a;
  opacity: 0.3;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

:deep(.swiper-pagination-bullet-active-custom) {
  background-color: #f45ebb;
  opacity: 1;
  width: 24px;
  border-radius: 4px;
}
</style>
