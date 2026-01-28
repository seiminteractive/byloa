<template>
  <section ref="containerRef" class="relative w-full bg-black py-16 md:py-24 overflow-hidden">
    <!-- Header Section -->
    <div ref="headerRef" class="w-full px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center gap-3 mb-8" ref="headerLabelRef">
          <div class="w-8 h-px bg-white/20"></div>
          <span class="text-xs uppercase tracking-widest text-white/40 font-light">Trabajo destacado</span>
        </div>
        <div ref="headerTitleRef">
          <h2 class="text-5xl md:text-7xl font-light text-white tracking-tight">
            Proyectos
          </h2>
        </div>
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
        <SwiperSlide v-for="(project, idx) in galleryProjects" :key="`${project.id}-${idx}`" class="swiper-slide-custom">
          <a :href="project.link" target="_blank" class="carousel-card cursor-pointer group">
            <img v-if="project.type === 'image'" :src="project.media" :alt="project.title" class="carousel-image" />
            <video v-else :src="project.media" class="carousel-image" muted loop autoplay playsinline />
          </a>
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
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, fetchProjects } from '../store/projects'
import { useCarouselProjects } from '../composables/useCarouselProjects'
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
  320: { slidesPerView: 1.5, spaceBetween: 12 },
  480: { slidesPerView: 2, spaceBetween: 14 },
  640: { slidesPerView: 2.5, spaceBetween: 16 },
  768: { slidesPerView: 3, spaceBetween: 18 },
  1024: { slidesPerView: 4, spaceBetween: 20 },
  1440: { slidesPerView: 5, spaceBetween: 20 }
}

// Usar la composable para manejar la lógica de duplicación de proyectos
const { carouselProjects, carouselInfo } = useCarouselProjects(projects)

// Computed para traer los proyectos duplicados del carrusel
const galleryProjects = computed(() => carouselProjects.value)

onMounted(async () => {
  // Cargar proyectos de la base de datos
  await fetchProjects()

  // Esperar a que Vue actualice el DOM con los nuevos proyectos
  await nextTick()

  // Forzar recalculación de Swiper con los nuevos slides
  if (swiperRef.value?.swiper) {
    swiperRef.value.swiper.update()
    // También reiniciar el carrusel para asegurar buen posicionamiento
    swiperRef.value.swiper.slideTo(0, 0)
  }

  // Animaciones con ScrollTrigger
  const triggers = []

  if (headerLabelRef.value) {
    triggers.push(
      gsap.fromTo(headerLabelRef.value, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: headerRef.value, start: 'top 85%', once: true } })
    )
  }
  if (headerTitleRef.value) {
    triggers.push(
      gsap.fromTo(headerTitleRef.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.15, scrollTrigger: { trigger: headerRef.value, start: 'top 85%', once: true } })
    )
  }
  if (headerDescriptionRef.value) {
    triggers.push(
      gsap.fromTo(headerDescriptionRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3, scrollTrigger: { trigger: headerRef.value, start: 'top 85%', once: true } })
    )
  }
  if (carouselWrapperRef.value) {
    triggers.push(
      gsap.fromTo(carouselWrapperRef.value, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: carouselWrapperRef.value, start: 'top 75%', once: true } })
    )
  }
  if (navigationButtonsRef.value) {
    triggers.push(
      gsap.fromTo(navigationButtonsRef.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: carouselWrapperRef.value, start: 'bottom 85%', once: true } })
    )
  }
})

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
  position: relative;
}

.carousel-card {
  position: relative;
  aspect-ratio: 3/4;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: #1a1a1a;
  cursor: grab;
  transform: scale(0.85);
  transition: all 0.4s ease-out;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

/* Overlay dinámico - más opaco cuanto más lejos está */
.carousel-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: rgba(0,0,0,0.8);
  pointer-events: none;
  transition: all 0.4s ease-out;
}

/* Slide activa - sin overlay */
.swiper-slide-active .carousel-card {
  transform: scale(1);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.swiper-slide-active .carousel-card::after {
  background: rgba(0,0,0,0);
}

/* Primera capa lateral inmediata - overlay moderado */
.swiper-slide-prev .carousel-card,
.swiper-slide-next .carousel-card {
  transform: scale(0.92);
}

.swiper-slide-prev .carousel-card::after,
.swiper-slide-next .carousel-card::after {
  background: rgba(0,0,0,0.5);
}

/* Segunda capa lateral - overlay más oscuro */
.swiper-slide-prev-prev .carousel-card,
.swiper-slide-next-next .carousel-card {
  transform: scale(0.85);
}

.swiper-slide-prev-prev .carousel-card::after,
.swiper-slide-next-next .carousel-card::after {
  background: rgba(0,0,0,0.75);
}

/* Tercera capa lateral - overlay muy oscuro */
.swiper-slide-prev-prev-prev .carousel-card,
.swiper-slide-next-next-next .carousel-card {
  transform: scale(0.8);
}

.swiper-slide-prev-prev-prev .carousel-card::after,
.swiper-slide-next-next-next .carousel-card::after {
  background: rgba(0,0,0,0.9);
}

/* Imagen */
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.4s ease-out;
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
  .carousel-card::after { border-radius: 18px; }
}

@media (max-width: 768px) {
  .swiper-carousel { padding: 1.5rem 0.75rem; }
  .carousel-card { border-radius: 16px; transform: scale(0.9); }
  .carousel-image { border-radius: 16px; }
  .carousel-card::after { border-radius: 16px; }
}

@media (max-width: 640px) {
  .swiper-carousel { padding: 1rem 0.5rem; }
  .carousel-card { border-radius: 12px; transform: scale(0.88); }
  .swiper-slide-active .carousel-card { transform: scale(1); }
  .carousel-image { border-radius: 12px; }
  .carousel-card::after { border-radius: 12px; }
}
</style>
