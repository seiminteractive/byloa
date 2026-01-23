import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useClipPathAnimation(containerRef) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cards = Array.from(containerRef.value?.children || [])

    if (prefersReducedMotion) {
      cards.forEach(card => {
        gsap.set(card, { clipPath: 'inset(0 0 0 0)' })
      })
      return
    }

    cards.forEach((card, index) => {
      // Determinar dirección: par = vertical, impar = horizontal
      const isEven = index % 2 === 0
      const initialClip = isEven ? 'inset(0 0 100% 0)' : 'inset(0 0 0 100%)'
      const finalClip = 'inset(0 0 0 0)'

      // Agregar clase de transición CSS
      card.classList.add('clip-path-transition')

      // Set inicial
      gsap.set(card, { clipPath: initialClip })

      // Timeline con ScrollTrigger
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          once: true
        }
      })

      timeline.to(
        card,
        {
          clipPath: finalClip,
          duration: 0.8,
          ease: 'power2.out'
        },
        0
      )

      timelines.push(timeline)
    })
  }

  onMounted(() => {
    createAnimation()
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
