import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useTimelineScrollAnimation(itemsRefs) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = Array.isArray(itemsRefs) ? itemsRefs : []

    if (items.length === 0) return

    if (prefersReducedMotion) {
      items.forEach(ref => {
        if (ref) {
          gsap.set(ref, { opacity: 1, y: 0 })
        }
      })
      return
    }

    items.forEach((ref, idx) => {
      if (!ref || typeof ref.getBoundingClientRect !== 'function') return

      // Inicializar estado
      gsap.set(ref, { opacity: 0, y: 30 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref,
          start: 'top center+=80',
          end: 'top center+=30',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            gsap.to(ref, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out'
            })
          }
        }
      })

      timelines.push(timeline)
    })
  }

  onMounted(() => {
    // Pequeño delay para asegurar que los elementos estén en el DOM
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
