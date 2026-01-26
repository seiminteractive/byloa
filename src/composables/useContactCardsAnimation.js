import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animaciones suaves para ContactSection
 * Tres cards entran con fade + slide elegante
 */
export function useContactCardsAnimation(cardsRefs) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      Object.values(cardsRefs).forEach(ref => {
        if (ref?.value) {
          gsap.set(ref.value, { opacity: 1, y: 0 })
        }
      })
      return
    }

    // Configuración de animaciones para cada card
    const animationConfig = [
      { ref: cardsRefs.leftTop, duration: 0.8, delay: 0 },
      { ref: cardsRefs.leftBottom, duration: 0.8, delay: 0.15 },
      { ref: cardsRefs.right, duration: 0.8, delay: 0.3 }
    ]

    animationConfig.forEach(({ ref, duration, delay }) => {
      if (!ref?.value) return

      // Setup GPU acceleration
      if (ref.value instanceof HTMLElement) {
        ref.value.style.willChange = 'opacity, transform'
      }

      // Set initial state
      gsap.set(ref.value, { opacity: 0, y: 30 })

      // Create timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.value,
          start: 'top 80%',
          once: true,
          markers: false
        },
        onComplete: () => {
          if (ref.value instanceof HTMLElement) {
            ref.value.style.willChange = 'auto'
          }
        }
      })

      // Animate in
      timeline.to(
        ref.value,
        {
          opacity: 1,
          y: 0,
          duration,
          ease: 'power2.out',
          delay
        },
        0
      )

      timelines.push(timeline)
    })
  }

  onMounted(() => {
    setTimeout(() => {
      createAnimation()
    }, 50)
  })

  onBeforeUnmount(() => {
    timelines.forEach(timeline => {
      if (timeline) {
        timeline.kill()
      }
    })
    timelines = []
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { timelines }
}
