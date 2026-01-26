import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animación para ContactSection - 3 tarjetas en grid
 * Cada tarjeta entra con fade + slide desde diferentes direcciones
 */
export function useContactGridAnimation(cardsRefs) {
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

    // Array de tarjetas con propiedades de entrada
    const cards = [
      { ref: cardsRefs.card1, fromX: -50, delay: 0 },
      { ref: cardsRefs.card2, fromX: 0, delay: 0.1 },
      { ref: cardsRefs.card3, fromX: 50, delay: 0.2 }
    ]

    // Animar cada tarjeta
    cards.forEach(({ ref, fromX, delay }) => {
      if (!ref?.value) return

      // GPU acceleration
      if (ref.value instanceof HTMLElement) {
        ref.value.style.willChange = 'opacity, transform'
      }

      // Set inicial
      gsap.set(ref.value, { 
        opacity: 0, 
        y: 30,
        x: fromX
      })

      // Timeline con ScrollTrigger
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

      timeline.to(
        ref.value,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay
        },
        0
      )

      timelines.push(timeline)
    })

    // Animar bottom CTA
    if (cardsRefs.bottomCta?.value) {
      if (cardsRefs.bottomCta.value instanceof HTMLElement) {
        cardsRefs.bottomCta.value.style.willChange = 'opacity, transform'
      }

      gsap.set(cardsRefs.bottomCta.value, { opacity: 0, y: 20 })

      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: cardsRefs.bottomCta.value,
          start: 'top 85%',
          once: true,
          markers: false
        },
        onComplete: () => {
          if (cardsRefs.bottomCta.value instanceof HTMLElement) {
            cardsRefs.bottomCta.value.style.willChange = 'auto'
          }
        }
      })

      ctaTimeline.to(
        cardsRefs.bottomCta.value,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3
        },
        0
      )

      timelines.push(ctaTimeline)
    }
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
