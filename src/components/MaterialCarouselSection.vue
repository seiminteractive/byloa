<template>
  <section ref="containerRef" class="relative w-full bg-black py-16 md:py-24 overflow-hidden">
    <!-- Header Section -->
    <div ref="headerRef" class="w-full px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      <div class="max-w-7xl mx-auto">
        <!-- Decorative line and label -->
        <div class="flex items-center gap-3 mb-8" ref="headerLabelRef">
          <div class="w-8 h-px bg-white/20"></div>
          <span class="text-xs uppercase tracking-widest text-white/40 font-light">Trabajo destacado</span>
        </div>

        <!-- Main title only -->
        <div ref="headerTitleRef">
          <h2 class="text-5xl md:text-7xl font-light text-white tracking-tight">
            Proyectos
          </h2>
        </div>

        <!-- Description - subtle and below -->
        <div class="mt-6 md:mt-8 max-w-2xl" ref="headerDescriptionRef">
          <p class="text-sm text-white/50 font-light leading-relaxed">
            Casos de estudio que demuestran nuestro enfoque en estrategia, diseño y comunicación coherente.
          </p>
        </div>
      </div>
    </div>

    <!-- Carousel Section -->
    <div class="carousel-wrapper" ref="carouselWrapperRef">
      <Swiper
        ref="swiperRef"
        :modules="[Navigation]"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :loop="true"
        :centered-slides="true"
        :grab-cursor="true"
        :speed="600"
        :breakpoints="breakpoints"
        :navigation="{ prevEl: '.swiper-button-prev-custom', nextEl: '.swiper-button-next-custom' }"
        class="swiper-carousel"
      >
        <SwiperSlide v-for="(image, idx) in galleryImages" :key="idx" class="swiper-slide-custom">
          <div class="carousel-card">
            <img :src="image" :alt="`slide-${idx}`" class="carousel-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-center items-center gap-6 mt-12 md:mt-16" ref="navigationButtonsRef">
      <button class="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center text-xl">
        ←
      </button>
      <button class="swiper-button-next-custom w-12 h-12 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xl font-bold">
        →
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'swiper/css'
import 'swiper/css/navigation'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref(null)
const headerRef = ref(null)
const headerLabelRef = ref(null)
const headerTitleRef = ref(null)
const headerDescriptionRef = ref(null)
const carouselWrapperRef = ref(null)
const navigationButtonsRef = ref(null)
const swiperRef = ref(null)

const slidesPerView = 5
const spaceBetween = 20

const breakpoints = {
  320: { slidesPerView: 1.3, spaceBetween: 12 },
  480: { slidesPerView: 1.5, spaceBetween: 14 },
  640: { slidesPerView: 2, spaceBetween: 16 },
  768: { slidesPerView: 2.5, spaceBetween: 18 },
  1024: { slidesPerView: 3.5, spaceBetween: 20 },
  1440: { slidesPerView: 5, spaceBetween: 20 }
}

const galleryImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1499955085172-a104c9463ece?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1533685852127-84b9f988ff18?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=500&h=600&fit=crop'
]

let scrollTriggers = []

// Animaciones con ScrollTrigger
onMounted(() => {
  // Limpiar ScrollTriggers previos
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())

  // Animación del label
  if (headerLabelRef.value) {
    gsap.fromTo(
      headerLabelRef.value,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.value,
          start: 'top 85%',
          markers: false,
          once: true
        }
      }
    )
  }

  // Animación del título
  if (headerTitleRef.value) {
    gsap.fromTo(
      headerTitleRef.value,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        delay: 0.15,
        scrollTrigger: {
          trigger: headerRef.value,
          start: 'top 85%',
          markers: false,
          once: true
        }
      }
    )
  }

  // Animación de la descripción
  if (headerDescriptionRef.value) {
    gsap.fromTo(
      headerDescriptionRef.value,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: headerRef.value,
          start: 'top 85%',
          markers: false,
          once: true
        }
      }
    )
  }

  // Animación del carousel
  if (carouselWrapperRef.value) {
    gsap.fromTo(
      carouselWrapperRef.value,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: carouselWrapperRef.value,
          start: 'top 75%',
          markers: false,
          once: true
        }
      }
    )
  }

  // Animación de los botones de navegación
  if (navigationButtonsRef.value) {
    gsap.fromTo(
      navigationButtonsRef.value,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: carouselWrapperRef.value,
          start: 'bottom 85%',
          markers: false,
          once: true
        }
      }
    )
  }
})

// Limpiar ScrollTriggers al desmontar
onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* Efecto de difuminado en los laterales */
.carousel-wrapper::before,
.carousel-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 15%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}

.carousel-wrapper::before {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
}

.carousel-wrapper::after {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
}

.swiper-carousel {
  width: 100%;
  padding: 2rem 1rem;
  perspective: 1200px;
}

.swiper-slide-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}

.carousel-card {
  position: relative;
  aspect-ratio: 3/4;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: #1a1a1a;
  cursor: grab;
  opacity: 0.4;
  transform: scale(0.92);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.swiper-slide-active .carousel-card,
.swiper-slide-duplicate-active .carousel-card {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.4s ease-out;
  display: block;
}

.carousel-card:hover .carousel-image {
  transform: scale(1.02);
}

.carousel-card:active {
  cursor: grabbing;
}

/* Botones personalizados de navegación */
.swiper-button-prev-custom,
.swiper-button-next-custom {
  cursor: pointer;
  user-select: none;
}

.swiper-button-prev-custom:active,
.swiper-button-next-custom:active {
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 1024px) {
  .carousel-card { border-radius: 18px; }
  .carousel-image { border-radius: 18px; }
  .carousel-wrapper::before,
  .carousel-wrapper::after { width: 12%; }
}

@media (max-width: 768px) {
  .swiper-carousel { padding: 1.5rem 0.75rem; }
  .carousel-card { border-radius: 16px; opacity: 0.5; transform: scale(0.94); }
  .swiper-slide-active .carousel-card,
  .swiper-slide-duplicate-active .carousel-card { opacity: 1; transform: scale(1); }
  .carousel-image { border-radius: 16px; }
  .carousel-wrapper::before,
  .carousel-wrapper::after { width: 10%; }
}

@media (max-width: 640px) {
  .swiper-carousel { padding: 1rem 0.5rem; }
  .carousel-card { border-radius: 12px; opacity: 0.5; transform: scale(0.95); }
  .swiper-slide-active .carousel-card,
  .swiper-slide-duplicate-active .carousel-card { opacity: 1; transform: scale(1); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4); }
  .carousel-image { border-radius: 12px; }
  .carousel-wrapper::before,
  .carousel-wrapper::after { width: 8%; }
}
</style>
