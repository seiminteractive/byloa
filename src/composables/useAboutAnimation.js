import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useAboutAnimation(elements) {
  let timeline = null

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsap.set([
        elements.title?.value,
        elements.description?.value,
        elements.logo?.value
      ].filter(Boolean), { opacity: 1 })
      return
    }

    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: elements.container?.value,
        start: 'top center+=100',
        end: 'top center',
        toggleActions: 'play none none reverse'
      }
    })

    // Title fade + slide up
    timeline.fromTo(
      elements.title.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0
    )

    // Description fade + slide up
    timeline.fromTo(
      elements.description.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      0.2
    )

    // Logo fade + scale
    timeline.fromTo(
      elements.logo.value,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
      0.3
    )
  }

  onMounted(() => {
    createAnimation()
  })

  onBeforeUnmount(() => {
    if (timeline) {
      timeline.kill()
      timeline = null
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { timeline }
}
