import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

export function useHeroAnimation(elements) {
  let timeline = null

  const createAnimation = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsap.set([
        elements.subtitle?.value,
        elements.title?.value,
        elements.description?.value,
        elements.features?.value,
        elements.cta?.value,
        elements.tagline?.value
      ].filter(Boolean), { opacity: 1 })
      return
    }

    timeline = gsap.timeline()

    // Subtitle
    timeline.fromTo(
      elements.subtitle.value,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      0
    )

    // Title
    timeline.fromTo(
      elements.title.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' },
      0.2
    )

    // Description
    timeline.fromTo(
      elements.description.value,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      0.5
    )

    // Features stagger
    timeline.fromTo(
      elements.features.value.querySelectorAll('span'),
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'back.out' },
      0.7
    )

    // CTA Button
    timeline.fromTo(
      elements.cta.value,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out' },
      1.1
    )

    // Tagline
    timeline.fromTo(
      elements.tagline.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      1.3
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
