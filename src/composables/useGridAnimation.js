import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGridAnimation(containerRef) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = Array.from(containerRef.value?.children || [])

    if (items.length === 0) return

    if (prefersReducedMotion) {
      items.forEach(item => {
        gsap.set(item, { opacity: 1, y: 0 })
      })
      return
    }

    items.forEach((item, index) => {
      // Establecer will-change directamente en el elemento
      if (item instanceof HTMLElement) {
        item.style.willChange = 'opacity, transform'
      }

      // Set inicial
      gsap.set(item, { opacity: 0, y: 30 })

      // Timeline con ScrollTrigger - optimizado
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true,
          markers: false
        },
        onComplete: () => {
          // Limpiar will-change después
          if (item instanceof HTMLElement) {
            item.style.willChange = 'auto'
          }
        }
      })

      timeline.to(
        item,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.08
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
