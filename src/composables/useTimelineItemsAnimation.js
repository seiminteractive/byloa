import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useTimelineItemsAnimation(containerRef) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    // Obtener todos los items del timeline
    const items = Array.from(containerRef.value?.querySelectorAll('[data-timeline-item]') || [])

    if (items.length === 0) return

    items.forEach((item, index) => {
      // Establecer will-change para GPU acceleration
      if (item instanceof HTMLElement) {
        item.style.willChange = 'opacity, transform'
      }

      // Set inicial
      gsap.set(item, { opacity: 0, y: 30 })

      // Timeline con ScrollTrigger
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true,
          markers: false
        },
        onComplete: () => {
          if (item instanceof HTMLElement) {
            item.style.willChange = 'auto'
          }
        }
      })

      // Animación fade + slide
      timeline.to(
        item,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
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
