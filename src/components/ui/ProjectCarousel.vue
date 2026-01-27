<template>
  <div ref="carouselContainerRef" class="project-carousel w-full will-change-transform">
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
      <SwiperSlide
        v-for="(image, idx) in images"
        :key="idx"
        class="swiper-slide-custom"
      >
        <div class="carousel-item" :class="{ 'is-active': activeSlideIndex === idx }">
          <img :src="image" :alt="`slide-${idx}`" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import gsap from 'gsap'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineProps({
  images: {
    type: Array,
    required: true,
    validator: (arr) => Array.isArray(arr) && arr.length > 0
  }
})

const carouselContainerRef = ref(null)
const swiperRef = ref(null)
const activeSlideIndex = ref(0)

const modules = [Navigation, Pagination, Autoplay, EffectCoverflow]
const slidesPerView = 3
const spaceBetween = 20
const breakpoints = {
  320: { slidesPerView: 1.3, spaceBetween: 10 },
  480: { slidesPerView: 1.5, spaceBetween: 12 },
  768: { slidesPerView: 2, spaceBetween: 15 },
  1024: { slidesPerView: 3, spaceBetween: 20 }
}

// Actualizar índice activo
const onSlideChange = (swiper) => {
  activeSlideIndex.value = swiper.realIndex
}

// Animación de entrada con GSAP
onMounted(() => {
  if (!carouselContainerRef.value) return
  gsap.fromTo(
    carouselContainerRef.value,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  )
})
</script>

<style scoped>
.project-carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-carousel {
  width: 100%;
  padding: 2rem 0;
}

.swiper-slide-custom {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item {
  position: relative;
  aspect-ratio: 3/4;
  width: 90%;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
  will-change: transform;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  opacity: 0.4;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.carousel-item.is-active {
  transform: scale(1.15);
  opacity: 1;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
  transition: transform 0.6s ease-out;
}

.carousel-item:hover img {
  transform: scale(1.08);
}

/* Mobile */
@media (max-width: 640px) {
  .carousel-item {
    width: 95%;
    border-radius: 12px;
  }
  .carousel-item img {
    border-radius: inherit;
  }
}
</style>
