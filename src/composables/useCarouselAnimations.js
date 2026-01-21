import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCarouselAnimations(containerRef, swiperRef) {
  let animationTimeline = null

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !containerRef?.value) {
      gsap.set(containerRef.value, { opacity: 1 })
      return
    }

    animationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top center+=100',
        end: 'top center',
        toggleActions: 'play none none reverse'
      }
    })

    // Container fade in
    animationTimeline.fromTo(
      containerRef.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0
    )
  }

  const animateSlideActive = () => {
    if (!swiperRef?.value?.swiper) return

    const swiper = swiperRef.value.swiper
    const activeSlide = swiper.slides[swiper.activeIndex]

    if (!activeSlide) return

    // Scale del slide activo
    gsap.to(activeSlide, {
      scale: 1.02,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto'
    })

    // Scale de otros slides
    swiper.slides.forEach((slide, index) => {
      if (index !== swiper.activeIndex) {
        gsap.to(slide, {
          scale: 0.95,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      }
    })
  }

  onMounted(() => {
    // Pequeño delay para asegurar que Swiper esté completamente inicializado
    setTimeout(() => {
      createAnimation()

      // Escuchar cambios de slide
      if (swiperRef?.value?.swiper) {
        const swiper = swiperRef.value.swiper
        swiper.on('slideChange', animateSlideActive)
        swiper.on('init', animateSlideActive)
        animateSlideActive()
      }
    }, 100)
  })

  onBeforeUnmount(() => {
    if (animationTimeline) {
      animationTimeline.kill()
      animationTimeline = null
    }

    if (swiperRef?.value?.swiper) {
      const swiper = swiperRef.value.swiper
      swiper.off('slideChange', animateSlideActive)
      swiper.off('init', animateSlideActive)
    }

    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { animationTimeline, animateSlideActive }
}
