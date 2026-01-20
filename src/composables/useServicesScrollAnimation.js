import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useServicesScrollAnimation(containerRef) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cards = Array.from(containerRef.value?.children || [])

    if (prefersReducedMotion) {
      cards.forEach(card => {
        gsap.set(card, { opacity: 1, y: 0 })
      })
      return
    }

    cards.forEach((card) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top center+=80',
          end: 'top center',
          toggleActions: 'play none none reverse'
        }
      })

      timeline.fromTo(
        card,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
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
