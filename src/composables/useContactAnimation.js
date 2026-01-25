import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useContactAnimation(containerRef) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!containerRef.value) return

    if (prefersReducedMotion) {
      gsap.set(containerRef.value, { opacity: 1, y: 0 })
      return
    }

    // Establecer will-change directamente en el elemento
    if (containerRef.value instanceof HTMLElement) {
      containerRef.value.style.willChange = 'opacity, transform'
    }

    // Animación del contenedor principal
    gsap.set(containerRef.value, { opacity: 0, y: 40 })

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top 75%',
        once: true,
        markers: false
      },
      onComplete: () => {
        // Limpiar will-change del contenedor
        if (containerRef.value instanceof HTMLElement) {
          containerRef.value.style.willChange = 'auto'
        }
      }
    })

    // Fade + slide del contenedor
    mainTimeline.to(containerRef.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0)

    // Animación de los items de contacto (staggered)
    const contactItems = containerRef.value.querySelectorAll('[ref="contactItemsRef"]')
    contactItems.forEach((item, index) => {
      // Establecer will-change en items
      if (item instanceof HTMLElement) {
        item.style.willChange = 'opacity, transform'
      }

      gsap.set(item, { opacity: 0, y: 20 })

      mainTimeline.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, 0.1 + index * 0.07)

      // Limpiar will-change de items
      mainTimeline.eventCallback('onComplete', () => {
        if (item instanceof HTMLElement) {
          item.style.willChange = 'auto'
        }
      })
    })

    timelines.push(mainTimeline)
  }

  onMounted(() => {
    setTimeout(() => {
      createAnimation()
    }, 30)
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
