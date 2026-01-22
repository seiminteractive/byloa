import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useTrustedBrandsAnimation(containerRef) {
  let timeline = null

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !containerRef?.value) {
      gsap.set(containerRef.value, { opacity: 1, y: 0 })
      return
    }

    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top center+=80',
        end: 'top center',
        toggleActions: 'play none none reverse'
      }
    })

    // Fade in suave
    timeline.fromTo(
      containerRef.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
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
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { timeline }
}
