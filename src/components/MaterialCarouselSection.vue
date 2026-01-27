<template>
  <section ref="containerRef" class="scroll-narrative">
    <!-- Screen 1 -->
    <div ref="screen1Ref" class="screen screen-1">
      <div class="content">
        <h2>Nuestros Proyectos</h2>
        <p>
          Un recorrido visual por nuestros trabajos más destacados. Cada proyecto
          es una historia de estrategia, creatividad y ejecución precisa.
        </p>
        <span class="hint">Scroll para continuar ↓</span>
      </div>
    </div>

    <!-- Screen 2: Gallery with 4 columns × 4 items parallax (DESKTOP) -->
    <div ref="screen2Ref" class="screen screen-2 screen-2-desktop">
      <div class="gallery-container">
        <!-- Column 1 (up) -->
        <div ref="column1Ref" class="gallery-column">
          <div v-for="i in 4" :key="`col1-${i}`" class="gallery-item">
            <img :src="galleryImages[(i - 1) % galleryImages.length]" :alt="i" />
          </div>
        </div>

        <!-- Column 2 (down) - Extra item al inicio para compensar desplazamiento -->
        <div ref="column2Ref" class="gallery-column">
          <div class="gallery-item">
            <img :src="galleryImages[3]" :alt="0" />
          </div>
          <div v-for="i in 4" :key="`col2-${i}`" class="gallery-item">
            <img :src="galleryImages[(4 + (i - 1)) % galleryImages.length]" :alt="i" />
          </div>
        </div>

        <!-- Column 3 (up) -->
        <div ref="column3Ref" class="gallery-column">
          <div v-for="i in 4" :key="`col3-${i}`" class="gallery-item">
            <img :src="galleryImages[(8 + (i - 1)) % galleryImages.length]" :alt="i" />
          </div>
        </div>

        <!-- Column 4 (down) - Extra item al inicio para compensar desplazamiento -->
        <div ref="column4Ref" class="gallery-column">
          <div class="gallery-item">
            <img :src="galleryImages[11]" :alt="0" />
          </div>
          <div v-for="i in 4" :key="`col4-${i}`" class="gallery-item">
            <img :src="galleryImages[(12 + (i - 1)) % galleryImages.length]" :alt="i" />
          </div>
        </div>
      </div>
    </div>

    <!-- Screen 2 Mobile: 2 Columns with Parallax (Like Desktop) -->
    <div ref="screen2MobileRef" class="screen screen-2 screen-2-mobile">
      <div class="mobile-gallery-container">
        <!-- Column 1 (up) -->
        <div ref="mobileColumn1Ref" class="mobile-gallery-column">
          <div v-for="i in 6" :key="`mobile-col1-${i}`" class="mobile-gallery-item">
            <img :src="galleryImages[(i - 1) % galleryImages.length]" :alt="i" />
          </div>
        </div>

        <!-- Column 2 (down) - Extra item al inicio para compensar desplazamiento -->
        <div ref="mobileColumn2Ref" class="mobile-gallery-column">
          <div class="mobile-gallery-item">
            <img :src="galleryImages[3]" :alt="0" />
          </div>
          <div v-for="i in 6" :key="`mobile-col2-${i}`" class="mobile-gallery-item">
            <img :src="galleryImages[(4 + (i - 1)) % galleryImages.length]" :alt="i" />
          </div>
        </div>
      </div>
    </div>

    <!-- Screen 3: Carousel -->
    <div ref="screen3Ref" class="screen screen-3">
    
      <!-- Carousel integrado en Screen 3 -->
      <div ref="carouselRef" class="carousel-wrapper">
        <Swiper
          ref="swiperRef"
          :modules="modules"
          :slides-per-view="slidesPerView"
          :space-between="spaceBetween"
          :loop="true"
          :centered-slides="true"
          :grab-cursor="true"
          :speed="600"
          :breakpoints="breakpoints"
          class="swiper-carousel"
          @slide-change="onSlideChange"
        >
          <SwiperSlide v-for="(image, idx) in galleryImages" :key="idx" class="swiper-slide-item" :class="{ 'active-slide': activeSlideIndex === idx }">
            <div class="carousel-card" :class="{ 'is-active': activeSlideIndex === idx }">
              <img :src="image" :alt="`slide-${idx}`" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div> 
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useScrollNarrative } from '@/composables/useScrollNarrative'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

gsap.registerPlugin(ScrollTrigger)

const mobileModules = []

const containerRef = ref(null)
const screen1Ref = ref(null)
const screen1ContentRef = ref(null)
const screen2Ref = ref(null)
const screen2MobileRef = ref(null)
const screen3Ref = ref(null)
const screen3ContentRef = ref(null)

// Column refs for parallax animation
const column1Ref = ref(null)
const column2Ref = ref(null)
const column3Ref = ref(null)
const column4Ref = ref(null)

// Mobile column refs
const mobileColumn1Ref = ref(null)
const mobileColumn2Ref = ref(null)

// 21 imágenes únicas para llenar 4 columnas × 5-6 items cada una
const galleryImages = [
'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1499955085172-a104c9463ece?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1533685852127-84b9f988ff18?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop',
]

const bgLayer2Ref = ref(null)
const gridItemsRef = ref([])
const carouselRef = ref(null)
const swiperRef = ref(null)
const activeSlideIndex = ref(0)

// Swiper configuration
const modules = [Navigation, Pagination, EffectCoverflow]
const slidesPerView = 5
const spaceBetween = 30
const breakpoints = {
  320: { slidesPerView: 1.3, spaceBetween: 10 },
  480: { slidesPerView: 1.5, spaceBetween: 12 },
  768: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 25 },
  1440: { slidesPerView: 5, spaceBetween: 30 }
}

// Handle slide change
const onSlideChange = (swiper) => {
  activeSlideIndex.value = swiper.realIndex
}

// Carousel animation on scroll
const animateCarousel = () => {
  if (!carouselRef.value) return
  
  gsap.fromTo(
    carouselRef.value,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  )
}

onMounted(() => {
  // Trigger carousel animation after a delay
  setTimeout(animateCarousel, 300)
})

onBeforeUnmount(() => {
  // Cleanup if needed
})

useScrollNarrative({
  containerRef,
  screen1Ref,
  screen1ContentRef,
  screen2Ref,
  screen2MobileRef,
  bgLayer2Ref,
  gridItemsRef,
  gridColumns: {
    value: {
      column1Ref,
      column2Ref,
      column3Ref,
      column4Ref
    }
  },
  mobileGridColumns: {
    value: {
      mobileColumn1Ref,
      mobileColumn2Ref
    }
  },
  screen3Ref,
  screen3ContentRef
})
</script>

<style scoped>
.scroll-narrative {
  position: relative;
  width: 100%;
  height: 650vh;
  background: rgb(0, 0, 0);
  z-index: auto;
}

/* SCREENS */
.screen {
  position: absolute;
  inset: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen-1 {
  background: black;
  color: white;
  z-index: 1;
}

.screen-2 {
  background: black;
  z-index: 2;
  height: 200vh;
  overflow-x: hidden;
  width: 100%;
}

.screen-3 {
  background: #000000;
  z-index: 3;
  height: 200vh;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Content en Screen 3: ABSOLUTE, TOP */
.screen-3 .content {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  max-width: 900px;
  width: 90%;
  padding: 1rem 2rem;
  text-align: center;
  pointer-events: auto;
  will-change: auto;
}

/* Carousel en Screen 3 */
.screen-3 .project-carousel {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 5;
  padding: 2rem 0;
}

/* Carousel en Screen 3 - FULLWIDTH CON FADE LATERALES */
.carousel-wrapper {
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  width: 100vw;
  height: 450px;
  z-index: 5;
  padding: 0;
  will-change: transform;
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
  background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
}

.carousel-wrapper::after {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
}

.swiper-carousel {
  width: 100%;
  height: 100%;
  padding: 0;
}

.swiper-slide-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100% !important;
  padding: 0 !important;
}

.carousel-card {
  position: relative;
  aspect-ratio: 3/4;
  width: 90%;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
  will-change: transform;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  opacity: 0.4;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  transform: scale(1);
  transform-origin: center;
}

/* Active card: brillante y más grande */
.carousel-card.is-active {
  opacity: 1;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transform: scale(1.15);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  border-radius: 16px !important;
}

.carousel-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
  transition: none;
  transform: none !important;
  pointer-events: none;
}

/* CTA Button al bottom */
.screen-3 .cta-wrapper {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

/* CONTENT GENERAL (Screen 1, Screen 2) */
.content {
  max-width: 900px;
  text-align: center;
  padding: 2rem;
}

.content h2 {
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
  font-weight: bold;
}

.content p {
  font-size: 1.2rem;
  opacity: 0.7;
  line-height: 1.6;
}

.content.dark {
  color: black;
}

.hint {
  display: inline-block;
  margin-top: 2rem;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  opacity: 0.5;
  text-transform: uppercase;
}

/* GALLERY GRID - 4 COLUMNS × 4 ITEMS */
.gallery-container {
  width: 100%;
  max-width: 1400px;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.gallery-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  will-change: transform;
}

/* Desplazamiento escalonado de columnas */
.gallery-column:nth-child(2) {
  margin-top: 100px;
}

.gallery-column:nth-child(4) {
  margin-top: 80px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease-out;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

/* BUTTON */
button {
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  border-radius: 999px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

button:hover {
  background: #1a1a1a;
  transform: translateY(-2px);
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .gallery-container {
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
  }
}

@media (max-width: 640px) {
  /* Hide desktop gallery, show mobile */
  .screen-2-desktop {
    display: none !important;
  }

  .screen-2 {
    height: 100vh !important;
  }

  .screen-2-mobile {
    display: flex !important;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
    height: 100vh !important;
  }

  .screen-3 {
    height: 100vh !important;
  }

  .mobile-gallery-container {
    padding: 1rem 0.8rem;
    width: 100%;
    max-height: 100vh;
    overflow: hidden;
  }

  .mobile-gallery-item {
    border-radius: 8px;
  }

  .content h2 {
    font-size: clamp(2rem, 6vw, 3rem);
  }
}

/* Mobile Gallery Styles */
.screen-2-desktop {
  display: flex;
}

.screen-2-mobile {
  display: none;
  align-items: center !important;
  justify-content: center !important;
}

.mobile-gallery-container {
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  align-items: start;
  margin: 0 auto;
  height: auto;
}

.mobile-gallery-column {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  will-change: transform;
}

.mobile-gallery-column:nth-child(2) {
  margin-top: 30px;
}

.mobile-gallery-item {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 10px;
  background: #1a1a1a;
  width: 100%;
}

.mobile-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease-out;
}

.mobile-gallery-item:hover img {
  transform: scale(1.08);
}

/* CAROUSEL RESPONSIVE */
@media (max-width: 640px) {
  .carousel-wrapper {
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) translateY(-50%);
    height: 350px !important;
    width: 100% !important;
    max-width: 95vw;
  }

  .swiper-slide-item {
    height: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-card {
    width: 95%;
    height: 100%;
    border-radius: 12px !important;
    overflow: hidden;
    aspect-ratio: 3/4;
  }

  .carousel-card img {
    width: 100% !important;
    height: 100% !important;
    border-radius: 12px !important;
    object-fit: cover;
    display: block;
  }

  .carousel-card.is-active {
    transform: scale(1) !important;
    border-radius: 12px !important;
    opacity: 1;
  }

  .carousel-wrapper::before,
  .carousel-wrapper::after {
    width: 20%;
  }

  .screen-3 .cta-wrapper {
    bottom: 25% !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gallery-item img {
    transition: none;
  }
}
</style>
