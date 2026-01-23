import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHowWeWorkAnimation(containerRef) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = Array.from(containerRef.value?.querySelectorAll('[data-timeline-item]') || [])

    if (items.length === 0) return

    if (prefersReducedMotion) {
      items.forEach(item => {
        gsap.set(item, { opacity: 1, y: 0, x: 0 })
      })
      return
    }

    items.forEach((item, index) => {
      // Obtener subelementos
      const badge = item.querySelector('[data-badge]')
      const dot = item.querySelector('[data-dot]')
      const content = item.querySelector('[data-content]')

      // Set inicial
      gsap.set(item, { opacity: 0, y: 20 })
      if (badge) gsap.set(badge, { opacity: 0, x: -15 })
      if (dot) gsap.set(dot, { scale: 0, opacity: 0 })
      if (content) gsap.set(content, { opacity: 0, y: 15 })

      // Timeline con ScrollTrigger
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          once: true
        }
      })

      // Animación principal del item
      timeline.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, 0)

      // Animación del badge (label)
      if (badge) {
        timeline.to(badge, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, 0.1)
      }

      // Animación del dot con escala
      if (dot) {
        timeline.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out'
        }, 0.2)
      }

      // Animación del contenido (staggered)
      if (content) {
        timeline.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, 0.15)
      }

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
