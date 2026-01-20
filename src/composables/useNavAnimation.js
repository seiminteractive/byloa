import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

export function useNavAnimation(elements) {
  let timeline = null

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsap.set([
        elements.logo?.value,
        elements.nav?.value,
        elements.ctaNav?.value
      ].filter(Boolean), { opacity: 1 })
      return
    }

    timeline = gsap.timeline()

    // Navigation fade in
    timeline.fromTo(
      [elements.logo?.value, elements.nav?.value, elements.ctaNav?.value].filter(Boolean),
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 },
      0
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
  })

  return { timeline }
}
