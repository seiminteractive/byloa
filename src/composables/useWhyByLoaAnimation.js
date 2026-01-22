import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useWhyByLoaAnimation(cardsRefs) {
  let timelines = []

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = Array.isArray(cardsRefs.value) ? cardsRefs.value : []

    if (prefersReducedMotion) {
      items.forEach(ref => {
        if (ref) gsap.set(ref, { opacity: 1, y: 0 })
      })
      return
    }

    items.forEach((ref, index) => {
      if (!ref) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref,
          start: 'top center+=80',
          end: 'top center',
          toggleActions: 'play none none reverse'
        }
      })

      timeline.fromTo(
        ref,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: index * 0.08 },
        0
      )

      timelines.push(timeline)
    })
  }

  onMounted(() => {
    createAnimation()
  })

  onBeforeUnmount(() => {
    timelines.forEach(t => {
      if (t) t.kill()
    })
    timelines = []
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { timelines }
}
